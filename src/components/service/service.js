
export const getEpisodesBySeasons = (season = 1) => {
    return fetch(`https://www.breakingbadapi.com/api/episodes?season=${season}`)
        .then(res => res.json())
        .catch(e => console.log(e))

}