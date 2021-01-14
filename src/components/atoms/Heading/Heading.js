import styled from 'styled-components';

const Heading = styled.h1`
  color: ${({theme}) => theme.color.text.accent};
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: bold;
`;
export default Heading;