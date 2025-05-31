import { Stack, Text } from "@mantine/core"
import Pages from "./components/Pages"
import SearchBar from "./components/SearchBar"
import { MovieProvider } from "./context/MovieContext"

function App() {

  return (
    <Stack gap={'xs'} style={{
        display:'flex',
        justifyContent:'start',
        alignItems:'center',
        height:'100vh'
    }}>
        <Text size="xl" fw={700} tt={'uppercase'}>Moodvie</Text>
        <Text>A movie recommender system based on your mood.</Text>
        
        <MovieProvider>
            <SearchBar />    
        </MovieProvider>

        <Pages />
    </Stack>
  )
}

export default App
