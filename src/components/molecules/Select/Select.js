import { useState } from 'react';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Input from "components/atoms/Input/Input";


const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
  z-index: 1;
  position: absolute;
  width: calc(75% - 20px);

  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
    width: calc(100% - 20px);
  }
  
  li {
    padding: 10px;
    color: ${({theme}) => theme.color.text.regular};
  }
`;

const StyledDownshift = styled(Downshift)`
  width: 100%;
`;

const Select = ({
                  items,
                  placeholder,
                  onItemSelect,
                  label,
                  name,
                }) => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <StyledDownshift
      isOpen={isMenuOpen}
      onOuterClick={() => {
        setMenuOpen(false)
        setInputValue('')
      }}
      itemToString={(item) => (item ? item.name : '')}
      inputValue={inputValue}
      onInputValueChange={(value) => setInputValue(value)}
      selectedItem={selectedItem}
      onSelect={(selectedItem) => {
        onItemSelect(selectedItem)
        setInputValue('')
        setSelectedItem(null)
      }}
      inputId={name}
    >
      {({
          getInputProps,
          getItemProps,
          getMenuProps,
          inputValue,
          highlightedIndex,
          selectedItem,
          isOpen,
        }) => (
        <div data-testid="sample-select">
          <Input
            {...getInputProps()}
            search
            name={name}
            placeholder={placeholder}
            onFocus={() => setMenuOpen(true)}
            label={label}
          />
          <StyledUl {...getMenuProps()} >
            {isOpen &&
            items
              .filter((item) =>
                !inputValue
                || item.name.toLowerCase()
                  .includes(inputValue.toLowerCase()))
              .map((item, index) => (
                <li
                  {...getItemProps({
                    key: `${item.id}${index}`,
                    item,
                    index,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  {item.name}
                </li>
              ))}
          </StyledUl>
        </div>
      )}
    </StyledDownshift>
  )
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
  })).isRequired,
  placeholder: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}



export default Select;