import styled from 'styled-components';
import arrowOpenIcon from 'assets/arrow_open.svg';
import arrowCloseIcon from 'assets/arrow_close.svg';
import Heading from "components/atoms/Heading/Heading";
import PropTypes from 'prop-types';
import {useState} from "react";
import PlanetsTable from "../../molecules/PlanetsTable/PlanetsTable";

const HeadingWrapper = styled.div`
  box-shadow: ${({isCollapsed}) => (
    isCollapsed
            ? '0px 2px 1px rgba(196, 196, 196, 0.2)'
            : '0px 4px 12px rgba(224, 230, 238, 0.5)'
  )};
  width: 73rem;
  height: 48px;
  border-radius: 4px;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
`;

const StyledHeading = styled(Heading)`
  text-align: left;
  margin: 14px 0 14px 15px;
  display: inline-block;
  width: 100%;
`;

const StyledIconButton = styled.button`
  //margin: 10px 16px 0px 13px;
  position: absolute;
  right: 16px;
  top: 15px;
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
  z-index: -1;
  width: 73rem;
  height: 250px;
  background-color: white;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
  position: absolute;
  left: 0;
  top: 12px;
  padding-top: 40px;
  display: ${({isCollapsed}) => isCollapsed ? 'none' : 'block'};
`;

const StyledWrapper = styled.div`
  position: relative;
`;


const CollapsableItem = ({title, child, data}) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <StyledWrapper>
      <HeadingWrapper isCollapsed={isCollapsed}>
        <StyledHeading>
          {title}
        </StyledHeading>
        <StyledIconButton onClick={toggleCollapsed} isCollapsed={isCollapsed} />
      </HeadingWrapper>
      <ContentWrapper isCollapsed={isCollapsed}>
        {child}
        {data && <PlanetsTable data={data}/>}
      </ContentWrapper>
    </StyledWrapper>
  )
}

CollapsableItem.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CollapsableItem;