import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import SVGIcon from '@shared/Components/SVGIcon';
import styled from 'styled-components/native';
import Typography from '@shared/Components/Typography';
import VerticalSpace from '@shared/Components/VerticalSpace';

interface TextInputFieldProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onCancel?: () => void;
  iconName: string;
  showInputInitially?: boolean;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  title,
  placeholder,
  value,
  onChangeText,
  onCancel,
  iconName = 'search',
  showInputInitially = false,
}) => {
  const [showInput, setShowInput] = useState(showInputInitially);

  return (
    <Container>
      <Row>
        <Typography variant="body" fontWeight="bold">
          {title}
        </Typography>
        {!showInput && (
          <TouchableOpacity onPress={() => setShowInput(true)}>
            <SVGIcon data={{iconName}} />
          </TouchableOpacity>
        )}
      </Row>
      <VerticalSpace height={10} />
      {showInput && (
        <InputContainer>
          <StyledTextInput
            placeholder={placeholder}
            placeholderTextColor={'#000'}
            value={value}
            onChangeText={onChangeText}
            style={{
              color: '#000',
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setShowInput(false);
              onCancel && onCancel();
            }}>
            <SVGIcon data={{iconName: 'cancel'}} />
          </TouchableOpacity>
        </InputContainer>
      )}
    </Container>
  );
};

const Container = styled.View``;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 8px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 0 10px;
`;

export default TextInputField;
