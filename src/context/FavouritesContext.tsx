// FavouritesContext.tsx
import React, { createContext, useContext, useState } from 'react';
import type { Movie } from '../types/Movie';

interface FavouritesContextType {
    favourites: Movie[];
    addToFavourites: (movie: Movie) => void;
    fetchFavourites: () => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favourites, setFavourites] = useState<Movie[]>([]);

    const fetchFavourites = async () => {
        try {
            const response = await fetch('http://localhost:5000/get-favourites', {
                method:'GET',
                headers:{'Content-Type':'application/json'}
            })

            const data = await response.json();
            console.log(data.message);
            setFavourites(data.results);
        } catch (error) {
            console.log('Error occured while fetching favourite movies:', error);
            return;
        }
    }

    const addToFavourites = async (movie: Movie) => {
        // adds the movie to favourites list
        try {
            const response = await fetch('http://localhost:5000/add-favourites', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(movie)
            })

            const data = await response.json();
            console.log(data.message);
            console.log(`movie added to favs: ${movie.id}`);
        } catch (error) {
            console.log('Error adding movie to favs:', error);
            return;
        }
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites, fetchFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
};

export const useFavourites = () => {
    const context = useContext(FavouritesContext);
    if (!context) throw new Error('useFavourites must be used within a FavouritesProvider');
    return context;
};
