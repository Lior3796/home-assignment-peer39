import { createContext, useContext } from "react";

// Episodes context for controlling the episodes all over the app
const episodeContext = createContext([]);
export const EpisodeProvider = episodeContext.Provider;
export const useEpisodeContext = () => useContext(episodeContext);


