import { Box, Button, TextInput } from "@mantine/core"
import { useState } from "react"
import { useMovieContext } from "../context/MovieContext";
import { moodToGenres } from "../utils/moodToGenre";

const api_key = import.meta.env.VITE_TMDB_API_KEY;
const bearer_token = import.meta.env.VITE_TMDB_BEARER_TOKEN;

function SearchBar() {
    const [mood, setMood] = useState<string>('');

    const [isMoodEmpty, setIsMoodEmpty] = useState<boolean>(false);

    const { setMovies } = useMovieContext();

    const fetchMovies = async () => {

        // get the genre mapping from mood
        const genre = moodToGenres[mood.toLowerCase()];

        if (!genre) {
            console.log('No genre of this type exists.');
            return;
        }

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${bearer_token}`
            }
        };
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.join(',')}`, options)

        if (!response.ok) {
            console.error('TMDB Error: Unable to fetch movies from TMDB.');
            return;
        }

        const data = await response.json();
        console.log(data.results);
    }

    const handleRecommend = () => {
        // fetches the movies from TMDB, based on mood entered
        if (mood === '') {
            console.log('Error: mood is empty.');
            setIsMoodEmpty(true);
            return;
        }
        setIsMoodEmpty(false);
        console.log(`mood: ${mood}`);

        // fetch movie data from TMDB
        fetchMovies();

        // clear the text input
        setMood('');
    }

    return <Box style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'300px'
    }}>
        <TextInput
            style={{
                width:'100%'
            }}
            value={mood}
            onChange={(event) => setMood(event.currentTarget.value)}
            label="How are you feeling today?"
            placeholder="Enter your mood here"
            error={isMoodEmpty ? 'please enter a mood' : null}
        />

        <Button style={{ width:'100%', marginTop:'10px' }} onClick={handleRecommend} variant="default">Recommend</Button>
    </Box>
}

export default SearchBar