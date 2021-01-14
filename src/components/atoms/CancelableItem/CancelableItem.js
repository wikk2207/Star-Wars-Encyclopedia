import styled from 'styled-components';
import PropTypes from 'prop-types';
import deleteIcon from 'assets/DELETE.svg';

const StyledWrapper = styled.div`
  width: 122px;
  height: 32px;
  border: 1px solid #999999;
  border-radius: 18px;
  position: relative;
`;

const StyledParagraph = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #474747;
  position: absolute;
  top: 6px;
  text-align: left;
  padding-left: 16px;
  margin: 0px;
`;

const StyledIconButton = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
`;

const CancelableItem = ({name}) => {
  return (
    <StyledWrapper>
      <StyledParagraph>
        {name}
      </StyledParagraph>
    </StyledWrapper>
  )
}

CancelableItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CancelableItem;