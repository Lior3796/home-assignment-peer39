const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { PaginationPage } from "../PaginationPage";

describe("PaginationPage tests", () => {
    it("Should check if navbar exists", () => {
        render(<PaginationPage />);
        const PaginationPageElem = screen.getByTitle("pagination-container");
        expect(PaginationPageElem).toBeInTheDocument();
    })
    it("Should not check if navbar exists", () => {
        render(<PaginationPage />);
        const PaginationPageElem = screen.queryByRole("form");
        expect(PaginationPageElem).not.toBeInTheDocument();
    })
})

