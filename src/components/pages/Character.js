import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/style.css';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { concatCharacterName } from '../utills/concatCharacterName';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const Character = () => {
    const [favoriteCharacter, setFavoriteCharacter] = useState({});
    const params = useParams();
    const windowWidth = window.innerWidth;

    useEffect(() => {
        const characterName = concatCharacterName(params.name) || "";
        fetch(`https://www.breakingbadapi.com/api/characters?name=${characterName}`)
            .then(res => res.json())
            .then(character => setFavoriteCharacter(character[0]))
            .catch(e => toast("Cant reload characters"))
    }, [])

    return (

        <div className="character-details-container">
            {
                windowWidth > 460 && (
                    <div className="character-image-container">
                        <img className="character-image" src={favoriteCharacter ? favoriteCharacter.img : "https://media.istockphoto.com/photos/iceberg-with-its-visible-and-underwater-or-submerged-parts-floating-picture-id1264160353?k=20&m=1264160353&s=612x612&w=0&h=aXfvgjOEvLekxZqIpbJByj80OLYx0esPjJ2jwyi-fUk="} alt="No Character found" />
                    </div>
                )
            }

            <div className="character-descripition">
                {windowWidth < 460 && (
                    <ListItemAvatar >
                        <Avatar sx={{ width: "150px", height: "150px" }} src={favoriteCharacter.img} />
                    </ListItemAvatar>
                )}
                <h1 className="character-header">{favoriteCharacter?.name || "Not found"}</h1>
                <h3 className="character-header">{favoriteCharacter?.nickname || "Not found"}</h3>
                <h3 className="character-header">{favoriteCharacter?.status || "Not found"}</h3>
                <p className="character-info">{favoriteCharacter?.birth || "Not found"}</p>
                <ul>
                    {favoriteCharacter ? favoriteCharacter.occupation?.map(item => <li className="episode-links-list">{item}</li>)
                        :
                        <li>No characters found</li>}
                </ul>
                <ToastContainer />
            </div>
        </div>
    )
}
