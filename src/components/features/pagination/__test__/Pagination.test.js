const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { PaginationPage } from "../PaginationPage";

const setPage = jest.fn;
describe("PaginationPage tests", () => {
    it("Should check if PaginationPage exists", () => {
        render(<PaginationPage setPage={setPage} />);
        const PaginationPageElem = screen.getByTitle("pagination-container");
        expect(PaginationPageElem).toBeInTheDocument();
    })
    it("Should not check if PaginationPage exists", () => {
        render(<PaginationPage setPage={setPage} />);
        const PaginationPageElem = screen.queryByRole("form");
        expect(PaginationPageElem).not.toBeInTheDocument();
    })
})

