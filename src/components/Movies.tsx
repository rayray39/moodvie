import { Stack } from "@mantine/core";
import MovieCard from "./MovieCard";
import { useMovieContext } from "../context/MovieContext";

function Movies() {
    const { movies } = useMovieContext();

    return <>
        <Stack mt={'sm'} style={{
            width:'600px',
        }}>
            {
                movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        movieTitle={movie.title}
                        movieOverview={movie.overview}
                        movieReleaseDate={movie.release_date}
                        movieBackDrop={movie.backdrop_path}
                        parentPage="home"
                    />
                ))
            }
        </Stack>
    </>
}

export default Movies