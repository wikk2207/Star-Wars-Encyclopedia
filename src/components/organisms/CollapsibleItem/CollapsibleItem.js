import styled from 'styled-components';
import arrowOpenIcon from 'assets/arrow_open.svg';
import arrowCloseIcon from 'assets/arrow_close.svg';
import PropTypes from 'prop-types';
import {useState} from "react";

const HeadingWrapper = styled.div`
  box-shadow: ${({isCollapsed}) => (
    isCollapsed
            ? '0px 2px 1px rgba(196, 196, 196, 0.2)'
            : '0px 4px 12px rgba(224, 230, 238, 0.5)'
  )};
  width: 100%;
  height: 48px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //z-index: 9999;
  //position: absolute;
  //left: 0;
  //top: 0;
`;

const StyledHeading = styled.h1`
  text-align: left;
  margin: 14px 0 14px 15px;
  display: inline-block;
  //width: 95%;
  color: ${({theme}) => theme.color.text.accent};
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: bold;
  //z-index: 1;
`;

const StyledIconButton = styled.button`
  margin: 0 10px;
  align-self: center;
  //position: absolute;
 // right: 16px;
  //top: 15px;
  width: 18px;
  height: 18px;
  background-image: url(${({isCollapsed}) => isCollapsed ? arrowOpenIcon : arrowCloseIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: none;
  background-color: transparent;
  //display: inline-block;
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 70px;
  background-color: transparent;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
  //left: 0;
  //top: 12px;
  margin-top: 10px;
  display: ${({isCollapsed}) => isCollapsed ? 'none' : 'block'};
  z-index: 100;
  align-self: center;
`;

const StyledWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin: 10px auto;
  background-color: white;
  border-radius: ${({isCollapsed}) => isCollapsed ? '4px' : '4px 4px 0 0'};
`;


const CollapsibleItem = ({title, children}) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <StyledWrapper isCollapsed={isCollapsed}>
      <HeadingWrapper isCollapsed={isCollapsed}>
        <StyledHeading>
          {title}
        </StyledHeading>
        <StyledIconButton onClick={toggleCollapsed} isCollapsed={isCollapsed} />
      </HeadingWrapper>
      <ContentWrapper isCollapsed={isCollapsed}>
        {!isCollapsed && children}
      </ContentWrapper>
    </StyledWrapper>
  )
}

CollapsibleItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default CollapsibleItem;