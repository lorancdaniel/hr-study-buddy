import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
  left: 10px;
  top: 3px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
