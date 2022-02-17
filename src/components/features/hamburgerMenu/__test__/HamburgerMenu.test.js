const { screen, render, fireEvent } = require("@testing-library/react");
import { HamburgerMenu } from "../HamburgerMenu";
import { BrowserRouter as Router } from "react-router-dom";

const MockHamburgerMenu = () => {
    return (
        <Router>
            <HamburgerMenu />
        </Router>

    )
}

describe("HamburgerMenu tests", () => {
    it("Should check if HamburgerMenu exists", () => {
        render(<MockHamburgerMenu />);
        const HamburgerMenuElem = screen.getByTitle("menu");
        expect(HamburgerMenuElem).toBeInTheDocument();
        fireEvent.click(HamburgerMenuElem);
        const Main = screen.getByText("Main");
        const Episode = screen.getByText("Episode");
        const Character = screen.getByText("Character");

        expect(Main).toBeInTheDocument();
        expect(Episode).toBeInTheDocument();
        expect(Character).toBeInTheDocument();

    })
    it("Should not check if HamburgerMenu exists", () => {
        render(<MockHamburgerMenu />);
        const HamburgerMenuElem = screen.queryByTitle("HamburgerMenu1");
        expect(HamburgerMenuElem).not.toBeInTheDocument();
    })
})

