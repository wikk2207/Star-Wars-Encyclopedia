import styled from 'styled-components';

const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  color: ${({ theme }) => theme.color.text.regular};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export default Paragraph;
