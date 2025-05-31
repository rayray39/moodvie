import { Stack, Text } from "@mantine/core"
import Movies from "./components/Movies"
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
            <Movies />
        </MovieProvider>
    </Stack>
  )
}

export default App
