import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/style.css';
import { concatCharacterName } from '../utills/concatCharacterName';

export const Character = () => {
    const [favoriteCharacter, setFavoriteCharacter] = useState({});
    const params = useParams();

    useEffect(() => {
        const characterName = concatCharacterName(params.name) || "";
        fetch(`https://www.breakingbadapi.com/api/characters?name=${characterName}`)
            .then(res => res.json())
            .then(character => setFavoriteCharacter(character[0]))
            .catch(e => console.log(e))
    }, [])

    return (

        <div className="character-details-container">
            <div className="character-image-container">
                <img className="character-image" src={favoriteCharacter ? favoriteCharacter.img : "https://media.istockphoto.com/photos/iceberg-with-its-visible-and-underwater-or-submerged-parts-floating-picture-id1264160353?k=20&m=1264160353&s=612x612&w=0&h=aXfvgjOEvLekxZqIpbJByj80OLYx0esPjJ2jwyi-fUk="} alt="No Character found" />
            </div>
            <div className="character-descripition">
                <h1 className="character-header">{favoriteCharacter?.name || "Not found"}</h1>
                <h3 className="character-header">{favoriteCharacter?.nickname || "Not found"}</h3>
                <h3 className="character-header">{favoriteCharacter?.status || "Not found"}</h3>
                <p className="character-info">{favoriteCharacter?.birth || "Not found"}</p>
                <ul>
                    {favoriteCharacter ? favoriteCharacter.occupation?.map(item => <li className="episode-links-list">{item}</li>)
                        :
                        <li>No characters found</li>}
                </ul>

                <div className="characters-links-list">
                    <a href="https://www.facebook.com/BreakingBad"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/BreakingBad/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/BreakingBad"><i class="fab fa-youtube"></i></a>
                    <a href="https://twitter.com/BreakingBad"><i class="fab fa-twitter"></i></a>
                </div>

            </div>
        </div>
    )
}
