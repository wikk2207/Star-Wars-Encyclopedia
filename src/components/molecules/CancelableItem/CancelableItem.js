import styled from 'styled-components';
import PropTypes from 'prop-types';
import deleteIcon from 'assets/delete.svg';

const StyledWrapper = styled.div`
  width: fit-content;
  height: 32px;
  min-height: 32px;
  border: 1px solid #999999;
  border-radius: 18px;
  margin: 5px;
  display: inline-block;
`;

const StyledParagraph = styled.p`
  text-align: left;
  margin: 6px 0px 6px 16px;
  display: inline-block;
  color: ${({ theme }) => theme.color.text.regular};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledIconButton = styled.button`
  margin: 10px 16px 0px 13px;
  width: 13px;
  height: 13px;
  background-image: url(${() => deleteIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: none;
  background-color: transparent;
  display: inline-block;
`;

const CancelableItem = ({name, planetId, onDelete}) => {
  return (
    <StyledWrapper>
      <StyledParagraph>
        {name}
      </StyledParagraph>
      <StyledIconButton
        onClick={() => onDelete(planetId)}
        type="button"
      />
    </StyledWrapper>
  )
}


CancelableItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CancelableItem;