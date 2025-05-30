import { useState } from "react"
import SearchBar from "./SearchBar";
import { Stack } from "@mantine/core";
import MovieCard from "./MovieCard";

function Movies() {
    const [movies, setMovies] = useState([]);

    return <>
        <SearchBar />

        <Stack>
            {
                movies.map(movie => (
                    <MovieCard 
                        movieTitle={movie['title']}
                        movieOverview={movie['overview']}
                        movieReleaseDate={movie['release_date']}
                        movieBackDrop={movie['backdrop_path']}
                    />
                ))
            }
        </Stack>
    </>
}

export default Movies