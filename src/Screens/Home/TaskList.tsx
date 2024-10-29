import React from 'react';
import {FlatList} from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({tasks, onToggleTask}) => (
  <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom: 80, flexGrow: 1}}
    data={tasks}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => (
      <TaskItem task={item} onToggleTask={onToggleTask} />
    )}
  />
);

export default TaskList;
