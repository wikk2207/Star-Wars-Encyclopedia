import styled from 'styled-components';

const StyledButton = styled.button`
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

const Button = (props) => (
  <StyledButton
    {...props}
    data-testid="sample-button"
  />
)

export default Button;
