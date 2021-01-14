import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.background.accent};
  border: none;
  border-radius: 4px;
  width: 160px;
  height: 33px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
`;

export default Button;
