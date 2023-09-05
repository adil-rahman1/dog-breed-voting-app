import { render, screen } from "../testUtils/testUtils";
import { Votes } from "./Votes";

//An example of using react-testing-library
describe("MyComponent", async () => {
    test.skip("Should have text Pick your favourite on it", () => {
        render(<Votes />);
        const elem = screen.getByText("Pick your favourite");
        expect(elem).toBeInTheDocument();
    });
});
