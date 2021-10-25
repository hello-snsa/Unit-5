import { MyButton } from "./MyButton";
import { render, fireEvent } from '@testing-library/react';



it("should call onClick with label", () => {
    const fn = jest.fn();
    const { getByTestId } = render(<MyButton label="hello" onClick={fn} />);
    const btn = getByTestId("myBtn");
    fireEvent.click(btn);
    expect(btn).toBeCalledWith("hello");



});



