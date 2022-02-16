import { screen, fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { EpisodesList } from "../EpisodesList";

const MockEpisodesList = () => {
    const item = {
        episode_id: "1",
        title: "Pilot",
        air_date: "01-20-2008"
    }
    return (
        <Router>
            <EpisodesList item={item} />
        </Router>
    )
}
describe("EpisodesList tests", () => {
    it("Should check if EpisodesList exists", () => {
        render(<MockEpisodesList />);
        const MockEpisodesListElem = screen.getByTestId("ListItem");
        expect(MockEpisodesListElem).toBeInTheDocument();

    })

    it("Should not check if EpisodesList exists", () => {
        render(<MockEpisodesList />);
        const MockEpisodesListElem = screen.queryByRole("form");
        expect(MockEpisodesListElem).not.toBeInTheDocument();
    })

    it("Should open episodes page", () => {
        render(<MockEpisodesList />)
        const link = screen.getByTestId("link");
        fireEvent.click(link);
        const episodeTitle = screen.getByText("Pilot");
        expect(episodeTitle).toBeInTheDocument();

    })

    it("Should not open episodes page", () => {
        render(<MockEpisodesList />)
        const link = screen.getByTestId("link");
        fireEvent.click(link);
        const episodeTitle = screen.queryByText("Pilot1");
        expect(episodeTitle).not.toBeInTheDocument();

    })
})
