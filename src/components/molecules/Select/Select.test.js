import { render, fireEvent } from 'utils/test-utils';
import Select from "./Select";

describe('Select component', () => {
  it('should return selected item', () => {
    let selectedItem = '';

    const items = [
      { value: '1', name: 'item1' },
      { value: '2', name: 'item2' },
    ];

    const selectItem = ({ value }) => {
      selectedItem = value;
    }

    const { getByTestId, getByRole } = render(
      <Select
        placeholder={'Search item'}
        label={'Select item'}
        name={'items'}
        onItemSelect={(item) => selectItem(item)}
        items={items}
      />
    );

    expect(getByTestId('sample-select'))
      .toBeInTheDocument();

    const input = getByTestId('sample-input');
    expect(input).toBeInTheDocument();
    fireEvent.focus(input);

    const listElement = getByRole(
      'option',
      {name: 'item1'}
      );
    expect(listElement).toBeInTheDocument()
    fireEvent.click(listElement);

    expect(selectedItem).toBe('1');
  })
})