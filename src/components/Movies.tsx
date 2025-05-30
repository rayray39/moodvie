import SearchBar from "./SearchBar";
import { Stack } from "@mantine/core";
import MovieCard from "./MovieCard";
import { useMovieContext } from "../context/MovieContext";

function Movies() {
    const { movies } = useMovieContext();

    return <>
        <SearchBar />

        <Stack>
            {
                movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movieTitle={movie.title}
                        movieOverview={movie.overview}
                        movieReleaseDate={movie.release_date}
                        movieBackDrop={movie.backdrop_path}
                    />
                ))
            }
        </Stack>
    </>
}

export default Movies