const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { Container } from "../Container";
import { ErrorBoundary } from 'react-error-boundary';

const MockContainer = () => {
    return (
        <ErrorBoundary>
            <Container />
        </ErrorBoundary>
    )
}
describe("Container tests", () => {

    it("Should check if Container elements exists", () => {
        render(<MockContainer />);
        const ContainerElem = screen.getByRole("main");
        expect(ContainerElem).toBeInTheDocument();
    })

    it("Should check if Container elements not exists", () => {
        render(<MockContainer />);
        const ContainerElem = screen.queryByRole("form");
        expect(ContainerElem).not.toBeInTheDocument();
    })
})
