import React, { useEffect, useState } from 'react'
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HamburgerMenu } from '../hamburgerMenu/HamburgerMenu';

// @desc navigation bar 

export const Navbar = () => {
    const windowWidth = window.innerWidth;
    return (
        <ErrorBoundary>
            <nav data-testid className="navbar-container">
                <h1>Lior App</h1>{
                    windowWidth > 460 ? (
                        <>
                            <Link className="navbar-link" to="/home-assignment-peer39/main"> Main </Link>
                            <Link className="navbar-link" to="/home-assignment-peer39/episode/1"> Episode </Link>
                            <Link className="navbar-link" to="/home-assignment-peer39/character/Walter"> character </Link>
                        </>) : <HamburgerMenu />
                }

            </nav>
        </ErrorBoundary>
    )
}
