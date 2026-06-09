import { render, screen} from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event"
import Form from "../Todos/Form";


describe("Form tests", () => {
    const mockSubmit = vi.fn();
    render(<Form createTodo={mockSubmit} />);
    const button = screen.getByTestId("form-button");
    test("Submit form", async() => {
        expect(button).toBeInTheDocument();
        await userEvent.click(button);
        expect(mockSubmit).toHaveBeenCalledTimes(1);
    })
})
