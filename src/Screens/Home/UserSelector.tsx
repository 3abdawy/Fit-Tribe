import React from 'react';
import styled from 'styled-components/native';
import {ScrollView, TouchableOpacity, Text, View} from 'react-native';

interface User {
  id: number;
  name: string;
}

interface UserSelectorProps {
  users: User[];
  selectedUserId: number;
  onSelectUser: (userId: number) => void;
}

const UserSelector: React.FC<UserSelectorProps> = ({
  users,
  selectedUserId,
  onSelectUser,
}) => {
  return (
    <View>
      <Container
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        {users.map(user => (
          <UserButton
            key={user.id}
            isSelected={user.id === selectedUserId}
            onPress={() => onSelectUser(user.id)}>
            <UserName isSelected={user.id === selectedUserId}>
              {user.name}
            </UserName>
          </UserButton>
        ))}
      </Container>
    </View>
  );
};

// Styled Components
const Container = styled(ScrollView)``;

const UserButton = styled(TouchableOpacity)<{isSelected: boolean}>`
  background-color: ${props => (props.isSelected ? '#4caf50' : '#e0e0e0')};
  padding: 10px 15px;
  border-radius: 8px;
  margin-right: 10px;
`;

const UserName = styled(Text)<{isSelected: boolean}>`
  color: ${props => (props.isSelected ? '#ffffff' : '#333')};
  font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
`;

export default UserSelector;
