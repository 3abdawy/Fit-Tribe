import axios, {AxiosResponse} from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

// Fetch tasks for a specific user
export const fetchTasks = (userId: number): Promise<AxiosResponse<Task[]>> =>
  axios.get(`${API_URL}/todos?userId=${userId}`);

// Update the completion status of a task
export const updateTask = (
  id: number,
  completed: boolean,
): Promise<AxiosResponse<Task>> =>
  axios.put(`${API_URL}/todos/${id}`, {completed});

// Add a new task
export const addTask = (title: string): Promise<AxiosResponse<Task>> =>
  axios.post(`${API_URL}/todos`, {title, completed: false});
