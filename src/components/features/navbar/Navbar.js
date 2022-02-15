import React, { useEffect, useState } from 'react'
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

export const Navbar = () => {
    const windowWidth = window.innerWidth;
    return (
        <ErrorBoundary>
            <nav data-testid className="navbar-container">
                <h1>Lior App</h1>{
                    windowWidth > 460 ? (
                        <>
                            <Link className="navbar-link" to="/main"> Main </Link>
                            <Link className="navbar-link" to="/episode/1"> Episode </Link>
                            <Link className="navbar-link" to="/character/Walter"> character </Link>
                        </>) : <></>
                }

            </nav>
        </ErrorBoundary>
    )
}
