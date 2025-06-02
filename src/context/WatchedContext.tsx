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
        try {
            const respoonse = await fetch('http://localhost:5000/add-watched', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(movie)
            })

            const data = await respoonse.json();
            console.log(data.message);
            setWatched(data.results);
            console.log(`movie added to watched list: ${movie.id}`);
        } catch (error) {
            console.log('Error occured while adding watched movie:', error);
        }
    }

    const fetchFromWatched = async () => {
        // returns all movies in the watched list
        try {
            const respoonse = await fetch('http://localhost:5000/get-watched', {
                method:'GET',
                headers:{'Content-Type':'application/json'},
            })

            const data = await respoonse.json();
            console.log(data.message);
            setWatched(data.results);
        } catch (error) {
            console.log('Error occured while fetching watched movies:', error);
        }
    }

    const removeFromWatched = async (id: number) => {
        // removes the movie from the watched list
        try {
            const respoonse = await fetch(`http://localhost:5000/remove-watched/${id}`, {
                method:'DELETE',
                headers:{'Content-Type':'application/json'},
            })

            const data = await respoonse.json();
            console.log(data.message);
            setWatched(data.results);
        } catch (error) {
            console.log('Error occured while removing watched movie:', error);
        }
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