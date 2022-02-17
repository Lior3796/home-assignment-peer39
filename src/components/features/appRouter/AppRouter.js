import { Navbar } from '../navbar/Navbar';
import '../../styles/style.css';
import { Footer } from '../footer/Footer';
import { Routes, Route } from "react-router-dom";
import { Main } from '../../pages/Main';
import { Episode } from '../../pages/Episode';
import { Character } from '../../pages/Character';
import { ErrorBoundary } from 'react-error-boundary';

// @desc application routing system

export const AppRouter = () => {
    return (
        <ErrorBoundary
            fallbackRender={() => (
                <div role="alert">
                    <div>Oh no</div>
                </div>
            )}

            fallback={() => {
                return (
                    <div>
                        Something went wrong
                    </div>
                )
            }}>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Main />} />
                    <Route path="/home-assignment-peer39/main" exact element={<Main />} />
                    <Route path="/home-assignment-peer39/episode/:id" exact element={<Episode />} />
                    <Route path="/home-assignment-peer39/character/:name" exact element={<Character />} />
                </Routes>
                <Footer />
            </>

        </ErrorBoundary>
    )
}
