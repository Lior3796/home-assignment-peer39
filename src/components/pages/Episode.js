import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export const Episode = () => {
    const [favoriteEpisode, setFavoriteEpisode] = useState({ title: "Pilot", air_date: "01-20-2008" });
    const [characters, setCharacters] = useState(["Walter White", "Jesse Pinkman"]);
    const params = useParams();


    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/episodes/${params.id}`)
            .then(res => res.json())
            .then(episodes => {
                setFavoriteEpisode(episodes[0] || {});
                setCharacters(favoriteEpisode.characters);
            })
            .catch(e => toast("Cant reload episodes"))
    }, [characters]);

    return (

        <div data-testid="episode" className="episode-details-container">
            <div className="episode-descripition">
                {
                    favoriteEpisode ?
                        <>
                            <h4 className="episode-header">Episode title:</h4>
                            <h1 className="episode-header">{favoriteEpisode?.title}</h1>
                            <p className="episode-info">air_date:</p>

                            <p className="episode-info">{favoriteEpisode?.air_date}</p>
                            <ul>
                                {characters?.map(item => <Link to={`/character/${item}`}><li>{item}</li></Link>)}
                            </ul>
                        </>
                        : "No episode"
                }
            </div>
            <ToastContainer />

        </div>
    )
}
