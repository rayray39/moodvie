import { Button, Card, Image, Text } from "@mantine/core"

function MovieCard({ movieTitle, movieOverview, movieReleaseDate, movieBackDrop }:{ movieTitle:string, movieOverview:string, movieReleaseDate:string, movieBackDrop:string }) {
    return <>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${movieBackDrop}`}
                    height={100}
                    alt="movie-image"
                />
            </Card.Section>

            <Text fw={700} mt={'md'} mb={'xs'}>{movieTitle}</Text>

            <Text size="xs">{movieReleaseDate}</Text>

            <Text lineClamp={2} size="sm" c="dimmed">
                {movieOverview}
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
                Add to Favourites
            </Button>
        </Card>
    </>
}

export default MovieCard