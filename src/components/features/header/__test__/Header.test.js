const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { Header } from "../Header";

describe("Header tests", () => {
    it("Should check if Header exists", () => {
        render(<Header />);
        const HeaderElem = screen.getByRole("heading");
        expect(HeaderElem).toContainHTML("h1");
        expect(HeaderElem).toBeInTheDocument();
    })
    it("Should check if Header not exists", () => {
        render(<Header />);
        const HeaderElem = screen.queryByRole("form");
        const HeaderComponent = screen.queryByRole("heading");
        expect(HeaderElem).not.toBeInTheDocument();
        expect(HeaderComponent).not.toContainHTML("h6");

    })
})
