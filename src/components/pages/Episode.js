import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/style.css';

export const Episode = () => {
    const [favoriteEpisode, setFavoriteEpisode] = useState({});
    const [characters, setCharacters] = useState([]);
    const params = useParams();


    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/episodes/${params.id}`)
            .then(res => res.json())
            .then(episodes => {
                console.log(episodes);
                setFavoriteEpisode(episodes[0] || {});
                setCharacters(favoriteEpisode.characters);
            })
            .catch(e => console.log(e))
    }, [characters]);

    return (

        <div data-testid="episode" className="episode-details-container">
            <div className="episode-descripition">
                {
                    favoriteEpisode ?
                        <>
                            <h1 className="episode-header">{favoriteEpisode?.title}</h1>
                            <p className="episode-info">{favoriteEpisode?.air_date}</p>
                            <ul>
                                {characters?.map(item => <Link to={`/character/${item}`}><li>{item}</li></Link>)}
                            </ul>
                        </>
                        : "No episode"
                }
            </div>
        </div>
    )
}
