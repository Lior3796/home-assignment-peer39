const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { Main } from "../Main";

describe("Main tests", () => {

    it("Should check if Main exists", () => {
        render(<Main />);
        const MainElem = screen.getByTestId("container");
        expect(MainElem).toBeInTheDocument();


    })
    it("Should not check if Main exists", () => {
        render(<Main />);
        const MainElem = screen.queryByRole("form");
        expect(MainElem).not.toBeInTheDocument();
    })
})

