import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { getEpisodesById } from '../service/service';

// Episode component using services and utiils functions

export const Episode = () => {
    const [favoriteEpisode, setFavoriteEpisode] = useState({ title: "Pilot", air_date: "01-20-2008" });
    const [characters, setCharacters] = useState(["Walter White", "Jesse Pinkman"]);
    const params = useParams();

    // Episode component - getEpisodes before the page is display

    useEffect(() => getEpisodesById(params, setCharacters, setFavoriteEpisode), [characters]);

    return (

        <div data-testid="episode" className="episode-details-container">
            <div className="episode-descripition">
                {
                    // Checking window width for choose whice element to render

                    favoriteEpisode ?
                        <>
                            <h4 className="episode-header">Episode title:</h4>
                            <h1 className="episode-header">{favoriteEpisode?.title}</h1>
                            <h6 className="episode-info">air_date:</h6>
                            <h6 className="episode-info">{favoriteEpisode?.air_date}</h6>
                            <ul>
                                {characters?.map((item, key) => <Link key={key} title="characters" to={`/character/${item}`}><li>{item}</li></Link>)}
                            </ul>
                        </>
                        // If the array is empty

                        : "No episode"
                }
            </div>
            <ToastContainer />

        </div>
    )
}
