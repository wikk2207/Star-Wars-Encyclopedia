import {fireEvent, render} from 'utils/test-utils';
import RemovableElement from "./RemovableElement";

describe('RemovableElement component', () => {
  it('should render RemovableElement', () => {
    const { getByText, getByTestId } = render(
      <RemovableElement
        elementId="1"
        onDelete={() => {}}
        name="Item"
      />
    );

    expect(getByText(/item/i)).toBeInTheDocument();

    expect(getByTestId('sample-element')).toBeInTheDocument();
    expect(getByTestId('sample-text')).toBeInTheDocument();
    expect(getByTestId('sample-button')).toBeInTheDocument();
  });

  it('should remove item from list after button click',() => {
    let items = ['1', '2', '3'];

    const removeItem = (id) => {
      items = items.filter(itemId => itemId !== id)
    }

    const { getByTestId } = render(
      <RemovableElement
        elementId="2"
        onDelete={removeItem}
        name="Item"
      />
    );

    fireEvent.click(getByTestId('sample-button'));

    expect(items).not.toContain('2');
  });
})