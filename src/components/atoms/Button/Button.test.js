import { render } from 'utils/test-utils';
import Button from "./Button";

describe('Button component', () => {
  it('renders button element', () => {
    const { getByTestId, getByText } = render(<Button>Click me</Button>);

    expect(getByTestId('sample-button'))
      .toBeInTheDocument();
    expect(getByText(/click me/i))
      .toBeInTheDocument();
  })


})