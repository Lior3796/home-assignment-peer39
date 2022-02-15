const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { Main } from "../Main";

it("Should check if navbar exists", () => {
    render(<Main />);
    const MainElem = screen.getByRole("main");
    expect(MainElem).toBeInTheDocument();
})
it("Should not check if navbar exists", () => {
    render(<Main />);
    const MainElem = screen.queryByRole("form");
    expect(MainElem).not.toBeInTheDocument();
})