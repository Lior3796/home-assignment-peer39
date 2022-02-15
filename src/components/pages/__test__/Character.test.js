const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { Character } from "../Character";

describe("Character tests", () => {
    it("Should check if navbar exists", () => {
        render(<Character />);
        const CharacterElem = screen.getByRole("main");
        expect(CharacterElem).toBeInTheDocument();
    })
    it("Should not check if navbar exists", () => {
        render(<Character />);
        const CharacterElem = screen.queryByRole("form");
        expect(CharacterElem).not.toBeInTheDocument();
    })
})
