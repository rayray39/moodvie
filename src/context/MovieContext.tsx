import { createContext, useContext, useState, type ReactNode } from "react";
import type { Movie } from "../types/Movie";


// Define the shape of the context value
interface MovieContextType {
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

// Create the context with an initial undefined value
const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
    children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = (): MovieContextType => {
    const context = useContext(MovieContext);
    
    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
};