import React, {FC} from 'react';
import CustomButton from '@shared/Components/Buttons/CustomButton';
import styled from 'styled-components/native';
import Typography from '@shared/Components/Typography';

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggleTask: (id: number, completed: boolean) => void;
}

const TaskItem: FC<TaskItemProps> = ({task, onToggleTask}) => (
  <Card>
    <Typography variant="title" fontWeight="semiBold">
      Task
    </Typography>
    <Typography variant="body">{task.title}</Typography>
    <CustomButton
      data={{
        text: task.completed ? 'Return Task' : 'Complete Task',
        textColor: '#fff',
      }}
      config={{
        customTextStyle: {
          fontWeight: '600',
        },
        customButtonStyle: {
          backgroundColor: task.completed ? '#f44336' : '#4caf50',
          marginVertical: 5,
          paddingVertical: 8,
        },
      }}
      eventHandlers={{
        onPress: () => onToggleTask(task.id, !task.completed),
      }}
    />
  </Card>
);

const Card = styled.View`
  background-color: #fef9f2;
  padding: 15px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 3;
  margin-vertical: 8px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Status = styled.Text`
  font-size: 14px;
  color: ${props => (props.completed ? '#4caf50' : '#f44336')};
  margin-vertical: 5px;
`;

export default TaskItem;
