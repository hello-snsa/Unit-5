import { MyButton } from "./MyButton";
import { render, fireEvent } from '@testing-library/react';
// import ReactDOM from 'react-dom';

it("should be rendered correctly", () => {
    render(<MyButton />);
});

it("should be rendered with no lebel", () => {
    const { getByTestId } = render(<MyButton />);
    const btn = getByTestId("myBtn");
    expect(btn).toHaveTextContent('');

});
// data-testid
it("should be rendered with lebel as Hello", () => {
    const { getByTestId } = render(<MyButton label="hello" />);
    const btn = getByTestId("myBtn");
    expect(btn).toHaveTextContent('hello')

});

it("should be Clickable", () => {
    const fn = jest.fn();
    const { getByTestId } = render(<MyButton label="hello" onClick={fn} />);
    const btn = getByTestId("myBtn");

    fireEvent.click(btn);
    expect(fn).toBeCalled();

});

it("should be Clicked 5 times", () => {

    const fn = jest.fn();
    const { getByTestId } = render(<MyButton label="hello" onClick={fn} />);

    const btn = getByTestId("myBtn");

    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(fn).toBeCalled();

});