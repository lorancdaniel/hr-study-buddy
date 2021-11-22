import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: basel;
  position: relative;
  padding: 24px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 95%;
    height: 0px;
    background-color: lightgrey;
    border: 0.5px solid #dfe2e8;
  }
`;

export const Average = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${(props) => AverageSwitch(props)};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  position: relative;
  height: 34px;
  line-height: 0;
  margin-top: -6px;
`;

export const Paragraph = styled.p`
  color: ${(props) => (props.isBold ? props.theme.colors.boldGrey : props.theme.colors.grey)};
  font-weight: ${(props) => (props.isBold ? props.theme.fontWeight.bold : props.theme.fontWeight.light)};
  font-size: ${(props) => (props.isBold ? props.theme.fontSize.l : props.theme.fontSize.s)};
  position: ${(props) => (props.isBold ? 'relative' : 'absolute')};
  bottom: ${(props) => (props.isBold ? '' : '-14px')};
`;

const AverageSwitch = (props) => {
  switch (true) {
    case props.children >= 4:
      return props.theme.colors.success;
    case props.children <= 2.5:
      return props.theme.colors.error;
    default:
      return props.theme.colors.warning;
  }
};
