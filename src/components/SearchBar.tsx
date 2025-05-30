import { Box, Button, TextInput } from "@mantine/core"
import { useState } from "react"

function SearchBar() {
    const [mood, setMood] = useState<string>('');

    const [isMoodEmpty, setIsMoodEmpty] = useState<boolean>(false);

    const handleRecommend = () => {
        // fetches the movies from TMDB, based on mood entered
        if (mood === '') {
            console.log('Error: mood is empty.');
            setIsMoodEmpty(true);
            return;
        }
        setIsMoodEmpty(false);
        console.log(`mood: ${mood}`);
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