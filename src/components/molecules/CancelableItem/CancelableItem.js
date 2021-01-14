import styled from 'styled-components';
import PropTypes from 'prop-types';
import deleteIcon from 'assets/delete.svg';
import Paragraph from "components/atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  min-height: 32px;
  border: 1px solid #999999;
  border-radius: 18px;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: left;
  margin: 6px 0px 6px 16px;
  display: inline-block;
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

const CancelableItem = ({name}) => {
  return (
    <StyledWrapper>
      <StyledParagraph>
        {name}
      </StyledParagraph>
      <StyledIconButton />
    </StyledWrapper>
  )
}

CancelableItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CancelableItem;