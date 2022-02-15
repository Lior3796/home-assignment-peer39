import { screen } from "@testing-library/react"
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "../Navbar";

const MockNavbar = () => {
    return (
        <Router>
            <Navbar />
        </Router>

    )
}
describe("Navbar tests", () => {
    it("Should check if navbar exists", () => {
        render(<MockNavbar />);
        const NavbarElem = screen.getByRole("heading");
        expect(NavbarElem).toBeInTheDocument();
    })

    it("Should check if navbar not exists", () => {
        render(<MockNavbar />);
        const NavbarElem = screen.queryByRole("form");
        expect(NavbarElem).not.toBeInTheDocument();
    })
})

