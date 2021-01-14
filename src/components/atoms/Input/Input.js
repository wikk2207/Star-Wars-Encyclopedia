import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/search.svg';

const Input = styled.input`
  padding-bottom: 7px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.grey100};
  border-style: solid;
  border-color: #999999;
  border-width: 0px 0px 1px 0px;
  width: 54rem;
  color: ${({theme}) => theme.color.text.regular};

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.color.text.placeholder};
  }

  ${({ search }) =>
  search &&
  css`
      //padding: 10px 20px 10px 40px;
      padding-right: 8px;
      background-image: url(${() => magnifierIcon});
      background-size: 16px;
      background-position: 99% 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;