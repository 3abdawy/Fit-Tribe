import React, {useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Typography from '@shared/Components/Typography';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import useTaskStore from '@store/TaskStore';
import TaskList from './TaskList';
import TextInputField from '@components/InputField';
import CustomButton from '@shared/Components/Buttons/CustomButton';
import VerticalSpace from '@shared/Components/VerticalSpace';

const Tasks = () => {
  const {t} = UseTranslationHook();
  const {tasks, fetchUserTasks, toggleTaskStatus, addNewTask} = useTaskStore();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUserTasks(1);
  }, []);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const completedTasks = filteredTasks.filter(task => task.completed);
  const pendingTasks = filteredTasks.filter(task => !task.completed);
  console.log({completedTasks, pendingTasks});
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
      style={styles.container}>
      <View>
        <View
          style={{backgroundColor: '#FEF9F2', borderRadius: 18, padding: 18}}>
          <TextInputField
            title="Search"
            placeholder="Search tasks"
            value={searchQuery}
            onCancel={() => setSearchQuery('')}
            onChangeText={setSearchQuery}
            iconName="search"
          />
          <TextInputField
            title="Add new task"
            placeholder="New task title"
            value={newTaskTitle}
            iconName="todo"
            onCancel={() => setNewTaskTitle('')}
            onChangeText={setNewTaskTitle}
          />
        </View>
        {!!newTaskTitle && (
          <>
            <VerticalSpace height={10} />
            <CustomButton
              data={{
                text: 'Add Task',
                textColor: '#F6FCDF',
              }}
              config={{
                customTextStyle: {
                  fontWeight: '600',
                },
                customButtonStyle: {
                  backgroundColor: '#4caf50',
                  borderRadius: 5,
                  marginVertical: 5,
                  paddingVertical: 8,
                },
              }}
              eventHandlers={{
                onPress: () => {
                  addNewTask(newTaskTitle);
                  setNewTaskTitle('');
                },
              }}
            />
          </>
        )}
        <VerticalSpace height={38} />
        <Typography variant="title" fontWeight="bold">
          Pending Tasks {pendingTasks.length}
        </Typography>
        <TaskList tasks={pendingTasks} onToggleTask={toggleTaskStatus} />
        <Typography variant="title" fontWeight="bold">
          Completed Tasks {completedTasks.length}
        </Typography>
        <TaskList tasks={completedTasks} onToggleTask={toggleTaskStatus} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default Tasks;
