import { Button, Stack, Text } from "@mantine/core"
import { useWatched } from "../context/WatchedContext"
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { ExportMovies } from "../utils/exportMovies";

function Watched() {
    const { watched, fetchFromWatched } = useWatched();

    useEffect(() => {
        fetchFromWatched();
    }, [])

    return <>
        <Stack align="center" mt={'sm'} style={{
            width:'600px',
        }}>
            <Button variant="default" size="xs" style={{ width:"40%" }} onClick={() => ExportMovies(watched, "watched_movies")}>Export Movies</Button>

            {
                watched.length !== 0 ?  watched.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        movieTitle={movie.title}
                        movieOverview={movie.overview}
                        movieReleaseDate={movie.release_date}
                        movieBackDrop={movie.backdrop_path}
                        parentPage="watched"
                    />
                )) : <Text style={{ textAlign:'center' }}>No movies added to watched yet.</Text>
            }
        </Stack>
    </>
}

export default Watched