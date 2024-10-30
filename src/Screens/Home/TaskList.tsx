import React, {FC} from 'react';
import {FlatList} from 'react-native';
import TaskItem from './TaskItem';
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number, completed: boolean) => void;
}
const TaskList: FC<TaskListProps> = ({tasks, onToggleTask}) => (
  <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingBottom: 10,
      paddingHorizontal: 6,
      flexGrow: 1,
      backgroundColor: '#DFE4EA',
      borderRadius: 12,
    }}
    data={tasks}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => (
      <TaskItem task={item} onToggleTask={onToggleTask} />
    )}
  />
);

export default TaskList;
