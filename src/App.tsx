import { Stack, Text } from "@mantine/core"
import Pages from "./components/Pages"
import SearchBar from "./components/SearchBar"
import { MovieProvider } from "./context/MovieContext"
import { FavouritesProvider } from "./context/FavouritesContext"

function App() {

  return (
    <MovieProvider>
        <FavouritesProvider>
                <Stack gap={'xs'} style={{
                    display:'flex',
                    justifyContent:'start',
                    alignItems:'center',
                    height:'100vh'
                }}>
                <Text size="xl" fw={700} tt={'uppercase'}>Moodvie</Text>
                <Text>A movie recommender system based on your mood.</Text>
                
                <SearchBar />    

                <Pages />
            </Stack>
        </FavouritesProvider>
    </MovieProvider>
  )
}

export default App
