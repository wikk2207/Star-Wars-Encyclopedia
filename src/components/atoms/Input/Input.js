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
  color: ${({ theme, error }) =>error ? 'red' : theme.color.text.regular};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: block;
  margin-bottom: 5px;
`;

const StyledParagraph = styled.p`
  border: 1px solid red;
  color: red;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 8px;
  margin-top: 1px;
  width: 100%;
  position: absolute;
`;

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Input = ({name, label, errorMessage, ...inputProps}) => {
  return (
    <StyledWrapper>
      <StyledLabel
        htmlFor={name}
        error={!!errorMessage}
      >
        {label}
      </StyledLabel>
      <StyledInput
        data-testid="sample-input"
        name={name}
        id={name}
        {...inputProps}
      />
      {errorMessage && <StyledParagraph>{errorMessage}</StyledParagraph>}
    </StyledWrapper>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
}

Input.defaultProps = {
  errorMessage: '',
}

export default Input;