import Downshift from 'downshift';
import Input from "components/atoms/Input/Input";
import {useState} from "react";
import styled from "styled-components";

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

const Select = ({items, placeholder, onItemSelect}) => {
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
      }
      }
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
        <div >
          <Input
            {...getInputProps()}
            search
            placeholder={placeholder}
            onFocus={() => setMenuOpen(true)}
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

export default Select;