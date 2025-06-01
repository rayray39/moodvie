import { Stack } from "@mantine/core"
import { useEffect, useState } from "react"
import type { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

function Favourites() {
    const [favMovies, setFavMovies] = useState<Movie[]>([]);

    const fetchFavourites = async () => {
        try {
            const response = await fetch('http://localhost:5000/get-favourites', {
                method:'GET',
                headers:{'Content-Type':'application/json'}
            })

            const data = await response.json();
            console.log(data.message);
            setFavMovies(data.results);
        } catch (error) {
            console.log('Error occured while fetching favourite movies:', error);
            return;
        }
    }

    useEffect(() => {
        // fetch all the fav movies from the favourites.JSON file
        fetchFavourites();
    }, [])

    return <>
        <Stack mt={'sm'} style={{
            width:'600px',
        }}>
            {
                favMovies && favMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        movieTitle={movie.title}
                        movieOverview={movie.overview}
                        movieReleaseDate={movie.release_date}
                        movieBackDrop={movie.backdrop_path}
                        parentPage="favourites"
                    />
                ))
            }
        </Stack>
    </>
}

export default Favourites