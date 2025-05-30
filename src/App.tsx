import { Box, Stack, Text } from "@mantine/core"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <Stack style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
    }}>
        <Text size="xl" fw={700} tt={'uppercase'}>Moodvie</Text>
        A movie recommender system based on your mood.

        <SearchBar />
    </Stack>
  )
}

export default App
