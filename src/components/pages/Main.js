import { useState, useEffect } from 'react';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { EpisodesList } from '../features/EpisodesList/EpisodesList';
import { getEpisodesBySeasons } from '../service/service';
import { PaginationPage } from '../features/pagination/PaginationPage';


// Main component using services and utiils functions


export const Main = () => {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);

    // Main component - getEpisodes before the page is display

    useEffect(() => getEpisodesBySeasons(1, page, setEpisodes), [page])

    return (
        <>
            <main data-testid="container" className="users-list-container" >
                {episodes.map(item => <EpisodesList item={item} />)}
            </main>
            <ToastContainer />

            <PaginationPage setPage={setPage} />
        </>
    )
}
