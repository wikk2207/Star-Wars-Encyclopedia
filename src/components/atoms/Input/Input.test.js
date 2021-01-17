import { render } from 'utils/test-utils';
import Input from './Input';



describe('Input components', () => {
  it('renders input element', () => {
    const { getByTestId } = render(<Input />);

    expect(getByTestId('sample-input'))
      .toBeInTheDocument();
  });

  it('renders input element with placeholder', () => {
    let placeholderText = 'Name';
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderText} />
    );

    expect(getByPlaceholderText(placeholderText))
      .toBeInTheDocument();
  });

  it('displays proper value', () => {
    const { getByLabelText } = render(
      <Input name="Name" />
      );

    expect(getByLabelText("Name"))
      .toBeInTheDocument();
  });

})