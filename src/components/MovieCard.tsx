import { Button, Card, Flex, Image, Text } from "@mantine/core"

function MovieCard({ movieId, movieTitle, movieOverview, movieReleaseDate, movieBackDrop, parentPage }:{ movieId:number ,movieTitle:string, movieOverview:string, movieReleaseDate:string, movieBackDrop:string, parentPage:string }) {
    
    const handleAddToFavs = () => {
        // adds the movie to favourites list
        console.log(`movie added to favs: ${movieId}`);
    }

    const handleAddToWatched = () => {
        // adds the movie to watched list
        console.log(`movie added to watched list: ${movieId}`);
    }

    const handleRemoveFromFavs = () => {
        // removes the movie from the favourites list
        console.log(`movie removed from favs: ${movieId}`);
    }

    const handleRemoveFromWatched = () => {
        // removes the movie from the watched list
        console.log(`movie removed from watched list: ${movieId}`);
    }

    const displayButtons = () => {
        if (parentPage === 'home') {
            return <>
                <Button variant="default" color="blue" fullWidth mt="xs" radius="md" onClick={handleAddToFavs}>Add to Favourites</Button>
                <Button variant="default" color="blue" fullWidth mt="xs" radius="md" onClick={handleAddToWatched}>Add to Watched</Button>
            </>
        } else if (parentPage === 'favourites') {
            return <>
                <Button variant="default" color="blue" fullWidth mt="xs" radius="md" onClick={handleRemoveFromFavs}>Remove from Favourites</Button>
            </>
        } else if (parentPage === 'watched') {
            return <>
                <Button variant="default" color="blue" fullWidth mt="xs" radius="md" onClick={handleRemoveFromWatched}>Remove from Watched</Button>
            </>
        } else {
            return null
        }
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
                { displayButtons() }
            </Flex>
        </Card>
    </>
}

export default MovieCard