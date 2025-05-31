import { Button, Card, Flex, Image, Text } from "@mantine/core"

function MovieCard({ movieId, movieTitle, movieOverview, movieReleaseDate, movieBackDrop }:{ movieId:number ,movieTitle:string, movieOverview:string, movieReleaseDate:string, movieBackDrop:string }) {
    
    const handleAddToFavs = () => {
        console.log(`movie added to favs: ${movieId}`);
    }

    const handleAddToWatched = () => {
        console.log(`movie added to watched list: ${movieId}`);
    }

    return <>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${movieBackDrop}`}
                    height={100}
                    alt="movie-image"
                />
            </Card.Section>

            <Text fw={700} mt={'xs'} >{movieTitle}</Text>

            <Text size="xs">{movieReleaseDate}</Text>

            <Text lineClamp={2} size="sm" c="dimmed">
                {movieOverview}
            </Text>

            <Flex gap={'md'}>
                <Button variant="default" color="blue" fullWidth mt="xs" radius="md" onClick={handleAddToFavs}>Add to Favourites</Button>
                <Button variant="default" color="blue" fullWidth mt="xs" radius="md" onClick={handleAddToWatched}>Add to Watched</Button>
            </Flex>
        </Card>
    </>
}

export default MovieCard