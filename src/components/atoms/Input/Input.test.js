import { render, fireEvent } from 'utils/test-utils';
import Input from './Input';



describe('Input components', () => {
  it('renders input element', () => {
    const { getByTestId } = render(<Input />);

    expect(getByTestId('sample-input'))
      .toBeInTheDocument();
  });

  it('displays given placeholder', () => {
    const placeholderText = 'Name';
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderText} />
    );

    expect(getByPlaceholderText(placeholderText))
      .toBeInTheDocument();
  });

  it('displays given label', () => {
    const labelText = "Name";
    const { getByLabelText } = render(
      <Input name={labelText} label={labelText}/>
      );

    expect(getByLabelText(labelText))
      .toBeInTheDocument();
  });

  it('displays proper value', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('sample-input');

    expect(input).toBeInTheDocument();

    fireEvent.change(
      input,
      { target: { value: 'hello' } },
      );

    expect(input).toHaveValue('hello');
  });

})