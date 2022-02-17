import { screen, fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Episode } from "../Episode";

const MockEpisodes = () => {
    return (
        <Router>
            <Episode />
        </Router>
    )
}
describe("Episodes tests", () => {
    it("Should check if Episode exists", () => {
        render(<MockEpisodes />);
        const MockEpisodesElem = screen.getByText("Episode title: Pilot");
        const characters = screen.getAllByTitle("characters");
        expect(MockEpisodesElem).toBeInTheDocument();
        expect(characters.length).toEqual(2);
    })

    it("Should not check if Episodes exists", () => {
        render(<MockEpisodes />);
        const MockEpisodesElem = screen.queryByText("Pilot1");
        expect(MockEpisodesElem).not.toBeInTheDocument();
    })

    it("Should open characters page", () => {
        render(<MockEpisodes />)
        const characters = screen.getAllByTitle("characters");
        fireEvent.click(characters[0]);
        const episodeTitle = screen.getByText("Walter White");
        expect(episodeTitle).toBeInTheDocument();
    })

    it("Should not open characters page", () => {
        render(<MockEpisodes />)
        const characters = screen.queryAllByTitle("characters");
        fireEvent.click(characters[0]);
        const episodeTitle = screen.queryByText("hank");
        expect(episodeTitle).not.toBeInTheDocument();
    })
})
