import { Stack, Text } from "@mantine/core"
import { useWatched } from "../context/WatchedContext"
import MovieCard from "./MovieCard";
import { useEffect } from "react";

function Watched() {
    const { watched, fetchFromWatched } = useWatched();

    useEffect(() => {
        fetchFromWatched();
    }, [])

    return <>
        <Stack mt={'sm'} style={{
            width:'600px',
        }}>
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