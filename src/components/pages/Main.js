import { useState, useEffect } from 'react';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { PaginationPage } from '../features/pagination/PaginationPage';
import { EpisodeProvider } from '../../context/context';
import { EpisodesList } from '../features/EpisodesList/EpisodesList';

export const Main = () => {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);

    const spliceEpisodes = (episodes) => {
        const newArr = episodes.splice((page - 2) * 7, 7);
        setEpisodes(newArr);
    }
    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/episodes?season=1`)
            .then(res => res.json())
            .then(episodes => spliceEpisodes(episodes))
            .catch(e => console.log(e))
    }, [page])

    return (
        <EpisodeProvider value={{ episodes, setEpisodes }}>
            <div data-testid="container" className="users-list-container" >
                {episodes.map(item => <EpisodesList item={item} />)}
            </div>
            <PaginationPage setPage={setPage} />
            <ToastContainer />
        </EpisodeProvider>
    )
}
