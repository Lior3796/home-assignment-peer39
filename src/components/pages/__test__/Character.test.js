const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { Character } from "../Character";

describe("Character tests", () => {
    it("Should check if navbar exists", () => {
        render(<Character />);
        const CharacterElem = screen.getByTitle("character");
        expect(CharacterElem).toBeInTheDocument();
    })
    it("Should not check if Character exists", () => {
        render(<Character />);
        const CharacterElem = screen.queryByRole("character1");
        expect(CharacterElem).not.toBeInTheDocument();
    })
})
