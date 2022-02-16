export const spliceEpisodes = (episodes, page, setEpisodes) => {
    const newArr = episodes.splice((page - 2) * 7, 7);
    setEpisodes(newArr);
}