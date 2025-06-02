import { createContext, useContext, useState } from "react";
import type { Movie } from "../types/Movie";

interface WatchedContextType {
    watched : Movie[],
    addToWatched : (movie:Movie) => void,
    fetchFromWatched : () => void,
    removeFromWatched : (id:number) => void
}

const WatchedContext = createContext<WatchedContextType | undefined>(undefined);

export const WatchedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [watched, setWatched] = useState<Movie[]>([]);

    const addToWatched = async (movie: Movie) => {
        // adds the movie to the watched list
    }

    const fetchFromWatched = async () => {
        // returns all movies in the watched list
    }

    const removeFromWatched = async (id: number) => {
        // removes the movie from the watched list
    }

    return (
        <WatchedContext.Provider
            value={{ watched, addToWatched, fetchFromWatched, removeFromWatched }}
        >
            {children}
        </WatchedContext.Provider>
    ); 
}

export const useWatched = () => {
    const context = useContext(WatchedContext);
    if (!context) throw new Error('useWatched must be used within a WatchedProvider');
    return context;
};