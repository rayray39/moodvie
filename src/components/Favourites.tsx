import { Stack } from "@mantine/core"
import { useEffect, useState } from "react"
import type { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

function Favourites() {
    const [favMovies, setFavMovies] = useState<Movie[]>([]);

    useEffect(() => {
        // fetch all the fav movies from the favourites.JSON file
    }, [])

    return <>
        <Stack style={{
            width:'600px'
        }}>
            {
                favMovies.map(movie => (
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