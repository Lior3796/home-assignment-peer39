import { spliceEpisodes } from '../utills/spliceEpisodes';
import { concatCharacterName } from '../utills/concatCharacterName';
import { toast } from 'react-toastify';

// @desc API calls - each function get the result from the api and filter it
// @desc toast - error handler

export const getEpisodesBySeasons = (season = 1, page, setEpisodes) => {
    return fetch(`https://www.breakingbadapi.com/api/episodes?season=${season}`)
        .then(res => res.json())
        .then(episodes => spliceEpisodes(episodes, page, setEpisodes))
        .catch(e => toast.dark("Cant reload episodes", { autoClose: 4000 }))
}

export const getEpisodesById = (params, setCharacters, setFavoriteEpisode,) => {

    return fetch(`https://www.breakingbadapi.com/api/episodes/${params.id}`)
        .then(res => res.json())
        .then(episodes => {
            setFavoriteEpisode(episodes[0] || {});
            setCharacters(episodes[0]?.characters);
        })
        .catch(e => toast("Cant reload episodes"))
}

export const getCharactersByName = (params, setFavoriteCharacter) => {
    const characterName = concatCharacterName(params?.name) || "";
    fetch(`https://www.breakingbadapi.com/api/characters?name=${characterName}`)
        .then(res => res.json())
        .then(character => setFavoriteCharacter(character[0] || []))
        .catch(e => toast("Cant reload characters"));
}

