import React, { useEffect, useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import '../../styles/style.css';
import { Footer } from '../footer/Footer';

import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import { Main } from '../../pages/Main';
import { Episode } from '../../pages/Episode';
import { Character } from '../../pages/Character';
import { ErrorBoundary } from 'react-error-boundary';



export const AppRouter = () => {
    return (
        <ErrorBoundary>
            <Router>
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/home-assignment-peer39" element={<Main />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/episode/:id" exact element={<Episode />} />
                        <Route path="/character/:name" exact element={<Character />} />
                    </Routes>
                    <Footer />
                </>
            </Router >
        </ErrorBoundary>
    )
}
