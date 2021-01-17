import { useState } from 'react';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Input from "components/atoms/Input/Input";


const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 54rem;
  box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
  z-index: 1;
  position: absolute;
  
  li {
    padding: 10px;
    color: ${({theme}) => theme.color.text.regular};
  }
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
    <Downshift
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
        setMenuOpen(false)
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
              .filter((item) => !inputValue || item.name.includes(inputValue))
              .map((item, index) => (
                <li
                  {...getItemProps({
                    key: `${item.value}${index}`,
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
    </Downshift>
  )
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
  })),
  placeholder: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

Select.defaultProps = {
  items: [],
}


export default Select;