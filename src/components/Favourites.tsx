import { Stack, Text } from "@mantine/core"
import { useEffect } from "react"
import MovieCard from "./MovieCard";
import { useFavourites } from "../context/FavouritesContext";

function Favourites() {
    const { fetchFavourites, favourites } = useFavourites();

    useEffect(() => {
        // fetch all the fav movies from the favourites.JSON file
        fetchFavourites();
    }, [])

    return <>
        <Stack mt={'sm'} style={{
            width:'600px',
        }}>
            {
                favourites.length !== 0 ? favourites.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        movieTitle={movie.title}
                        movieOverview={movie.overview}
                        movieReleaseDate={movie.release_date}
                        movieBackDrop={movie.backdrop_path}
                        parentPage="favourites"
                    />
                )) : <Text style={{ textAlign:'center' }}>No movies added to favourites yet.</Text>
            }
        </Stack>
    </>
}

export default Favourites