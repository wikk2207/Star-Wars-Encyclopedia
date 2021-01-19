import styled from 'styled-components';

const StyledTable = styled.table`
  font-size: 14px;
  color: ${({theme}) => theme.color.text.regular};
  background-color: white;
  width: 100%;
  padding: 16px;
  
  thead tr {
    box-shadow: 0 1px 0px rgba(196, 196, 196, 1);
  }
  
  th {
    font-weight: normal;
    text-align: right;
    padding: 7px 0;
    color: ${({theme}) => theme.color.text.regular};
  }

  th:first-of-type {
    text-align: left;
    color: ${({theme}) => theme.color.text.accent};
  }
  
  td {
    width: 10rem;
    padding: 15px 0;
    text-align: right;
    color: ${({theme}) => theme.color.text.regular};
  }
  
  td:first-of-type {
    text-align: left;
    color: ${({theme}) => theme.color.text.accent};
  }
  
  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
    padding: 0;
    font-size: 14px;
    
    thead tr {
      display: none;
    }
    
    tr { 
      width: 100%;
      box-shadow: none;
    }
    
    tr:nth-of-type(even) {
      background: #E5E5E5 50%;
    }
    
    td {
      display: block;
      width: 100%;
      margin: 10px;
      text-align: left;
      padding-left: 45%;
      position: relative;
    }
    
    td:before {
      position: absolute;
      top: 15px;
      left: 0px;
      width: 45%;
      text-align: left;
    }

    td:nth-of-type(1):before {
      content: "Planet Name";
    }

    td:nth-of-type(2):before {
      content: "Rotation period";
    }

    td:nth-of-type(3):before {
      content: "Orbital period";
    }

    td:nth-of-type(4):before {
      content: "Diameter";
    }

    td:nth-of-type(5):before {
      content: "Climate";
    }

    td:nth-of-type(6):before {
      content: "Surface water";
    }

    td:nth-of-type(7):before {
      content: "Population";
    }
  }
`;

export default StyledTable;