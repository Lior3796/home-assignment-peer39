import { screen, fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserList } from "../EpisodesList";

const MockUserList = () => {
    const item = {
        episode_id: "1",
        title: "Walter white"
    }
    return (
        <Router>
            <UserList item={item} />
        </Router>
    )
}
describe("UserList tests", () => {
    it("Should check if UserList exists", () => {
        render(<MockUserList />);
        const MockUserListElem = screen.getByTestId("ListItem");
        expect(MockUserListElem).toBeInTheDocument();

    })
    it("Should not check if UserList exists", () => {
        render(<MockUserList />);
        const MockUserListElem = screen.queryByRole("form");
        expect(MockUserListElem).not.toBeInTheDocument();
    })
    it("Should open episodes page", () => {
        render(<MockUserList />)
        const link = screen.getByTestId("link");
        expect(link).toBeInTheDocument();
        fireEvent.click(link, { target: { value: "Walter white" } });
        const episode = screen.getByTestId("episode");
        console.log(episode);
        expect(episode).toBeInTheDocument();
    })
})
