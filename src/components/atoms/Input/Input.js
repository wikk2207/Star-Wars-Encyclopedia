import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import magnifierIcon from 'assets/search.svg';

const StyledInput = styled.input`
  padding-bottom: 7px;
  font-size: 16px;
  background-color: white;
  border-style: solid;
  border-color: #999999;
  border-width: 0px 0px 1px 0px;
  color: ${({theme}) => theme.color.text.regular};
  outline: none;
  width: 100%;

  ::placeholder {
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

const StyledLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  color: ${({ theme }) => theme.color.text.regular};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: block;
  margin-bottom: 5px;
`;

const Input = ({name, label, ...inputProps}) => {
  return (
    <>
      <StyledLabel
        htmlFor={name}
      >
        {label}
      </StyledLabel>
      <StyledInput
        data-testid="sample-input"
        name={name}
        id={name}
        {...inputProps}
      />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input;