import {create} from 'zustand';
import {createJSONStorage, persist, PersistOptions} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {fetchTasks, updateTask, addTask} from '@services/api';

// Define the Task interface
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Define the structure of the state
interface TaskStoreState {
  tasks: Task[];
  offlineUpdates: Partial<Task>[]; // Use Partial<Task> to support both status updates and new tasks
  fetchUserTasks: (userId: number) => Promise<void>;
  toggleTaskStatus: (id: number, completed: boolean) => Promise<void>;
  addNewTask: (title: string) => Promise<void>;
  syncOfflineUpdates: () => Promise<void>;
}

const useTaskStore = create<TaskStoreState>(
  persist(
    (set, get) => ({
      tasks: [],
      offlineUpdates: [],

      // Fetch tasks from API or local cache if offline
      fetchUserTasks: async (userId: number) => {
        const isConnected = await NetInfo.fetch().then(
          state => state.isConnected,
        );

        if (isConnected) {
          const response = await fetchTasks(userId);
          set({tasks: response.data});
        }
      },

      // Toggle task status and cache offline updates if disconnected
      toggleTaskStatus: async (id: number, completed: boolean) => {
        const isConnected = await NetInfo.fetch().then(
          state => state.isConnected,
        );

        if (isConnected) {
          await updateTask(id, completed);
          set(state => ({
            tasks: state.tasks.map(task =>
              task.id === id ? {...task, completed} : task,
            ),
          }));
        } else {
          set(state => ({
            tasks: state.tasks.map(task =>
              task.id === id ? {...task, completed} : task,
            ),
            offlineUpdates: [...state.offlineUpdates, {id, completed}],
          }));
        }
      },

      // Add a new task, cache offline if disconnected
      addNewTask: async (title: string) => {
        const isConnected = await NetInfo.fetch().then(
          state => state.isConnected,
        );

        if (isConnected) {
          const response = await addTask(title);
          set(state => ({tasks: [response.data, ...state.tasks]}));
        } else {
          const newTask = {id: Date.now(), title, completed: false};
          set(state => ({
            tasks: [newTask, ...state.tasks],
            offlineUpdates: [...state.offlineUpdates, newTask],
          }));
        }
      },

      // Sync offline updates with the server when reconnected
      syncOfflineUpdates: async () => {
        const isConnected = await NetInfo.fetch().then(
          state => state.isConnected,
        );

        if (isConnected) {
          const {offlineUpdates} = get();
          for (const update of offlineUpdates) {
            if ('completed' in update) {
              await updateTask(update.id, update.completed);
            } else {
              await addTask(update.title);
            }
          }
          set({offlineUpdates: []});
        }
      },
    }),
    {
      name: 'tasksStore',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useTaskStore;
