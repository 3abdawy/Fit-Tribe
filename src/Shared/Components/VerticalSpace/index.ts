import styled from 'styled-components/native';

const VerticalSpace = styled.View<{height: number}>`
  height: ${({height}) => height || 1}px;
`;

export default VerticalSpace;
