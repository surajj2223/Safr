import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primaryColor};
  justify-content: center;
  align-items: center;
`;

export const ThemedText = styled.Text`
  color: ${({ theme }) => theme.ascentColor};
  font-size: 16px;
`;
