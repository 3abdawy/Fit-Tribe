import React, {useEffect, useState, FC} from 'react';
import Typography from '@shared/Components/Typography';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import useTaskStore from '@store/TaskStore';
import TaskList from './TaskList';
import TextInputField from '@components/InputField';
import CustomButton from '@shared/Components/Buttons/CustomButton';
import VerticalSpace from '@shared/Components/VerticalSpace';
import styled from 'styled-components/native';
import UserSelector from './UserSelector';
import CircledCount from '@shared/Components/CircledCount/CircledCount';

const users = [
  {id: 1, name: 'Ahmed'},
  {id: 2, name: 'Mohamed'},
  {id: 3, name: 'Islam'},
];

const Tasks: FC = () => {
  const {t} = UseTranslationHook();
  const {tasks, fetchUserTasks, toggleTaskStatus, addNewTask} = useTaskStore();
  const [selectedUserId, setSelectedUserId] = useState<number>(1);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // I wrote the following code to fetch tasks every 1 minute as a simulation for polling

  // useEffect(() => {
  //   // Initial fetch for the selected user's tasks
  //   fetchUserTasks(selectedUserId);

  //   // Set up polling to fetch tasks every 1 minute (60000 ms)
  //   const intervalId = setInterval(() => {
  //     fetchUserTasks(selectedUserId);
  //   }, 60000);

  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [selectedUserId]);

  useEffect(() => {
    fetchUserTasks(selectedUserId); // Fetch tasks for the selected user
  }, [selectedUserId]);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const completedTasks = filteredTasks.filter(task => task.completed);
  const pendingTasks = filteredTasks.filter(task => !task.completed);
  console.log({completedTasks, pendingTasks});
  return (
    <Container>
      <UserSelector
        users={users}
        selectedUserId={selectedUserId}
        onSelectUser={userId => setSelectedUserId(userId)}
      />
      <VerticalSpace height={10} />
      <InputContainer>
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
      </InputContainer>
      <VerticalSpace height={10} />

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
      <VerticalSpace height={10} />
      <TaskTitleContainer>
        <SectionTitle>
          Pending Tasks <CircledCount type="CARD" count={pendingTasks.length} />
        </SectionTitle>
      </TaskTitleContainer>
      <VerticalSpace height={10} />
      <TaskList tasks={pendingTasks} onToggleTask={toggleTaskStatus} />
      <VerticalSpace height={28} />
      <TaskTitleContainer>
        <SectionTitle>
          Completed Tasks{' '}
          <CircledCount type="CARD" count={completedTasks.length} />
        </SectionTitle>
      </TaskTitleContainer>
      <VerticalSpace height={10} />
      <TaskList tasks={completedTasks} onToggleTask={toggleTaskStatus} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

const TaskTitleContainer = styled.View`
  background-color: #ffffff;
  padding: 8px;
  border-radius: 8px;
`;

const InputContainer = styled.View`
  background-color: #fef9f2;
  border-radius: 18px;
  padding: 18px;
`;

const SectionTitle = styled(Typography).attrs({
  variant: 'title',
  fontWeight: 'bold',
})`
  font-size: 18px;
`;

export default Tasks;
