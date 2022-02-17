import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ToastContainer } from 'react-toastify';
import { getCharactersByName } from '../service/service';

// @desc Character component using services and utiils functions

export const Character = () => {
    const [favoriteCharacter, setFavoriteCharacter] = useState({});
    const params = useParams();
    const windowWidth = window.innerWidth;

    // @desc Character component - getCharacter before the page is display

    useEffect(() => getCharactersByName(params, setFavoriteCharacter), [])

    return (

        <div title="character" className="character-details-container">
            {
                // @desc Checking window width for choose whice element to render
                windowWidth > 460 && (
                    <div className="character-image-container">
                        <img className="character-image" src={favoriteCharacter ? favoriteCharacter?.img : "https://media.istockphoto.com/photos/iceberg-with-its-visible-and-underwater-or-submerged-parts-floating-picture-id1264160353?k=20&m=1264160353&s=612x612&w=0&h=aXfvgjOEvLekxZqIpbJByj80OLYx0esPjJ2jwyi-fUk="} alt="No Character found" />
                    </div>
                )
            }

            <div className="character-descripition-container">
                {
                    // @desc Checking window width for choose whice element to render

                    windowWidth < 460 && (
                        <ListItemAvatar className="character-list-item-avatar" >
                            <Avatar className="character-avatar" src={favoriteCharacter.img} />
                        </ListItemAvatar>
                    )}
                <div className="character-descripition">
                    <h1 className="character-header">{favoriteCharacter?.name || "Not found"}</h1>
                    <h3 className="character-header">{favoriteCharacter?.nickname || "Not found"}</h3>
                    <h3 className="character-header">{favoriteCharacter?.status || "Not found"}</h3>
                    <p className="character-info">{favoriteCharacter?.birth || "Not found"}</p>
                </div>

                <ul>
                    {
                        // @desc Checking if favoriteCharacter have occupation

                        favoriteCharacter ? favoriteCharacter?.occupation?.map(item => <li className="episode-links-list">{item}</li>)
                            :
                            <li>No characters found</li>}
                </ul>
                <ToastContainer />
            </div>
        </div>
    )
}
