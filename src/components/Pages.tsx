import { Tabs } from "@mantine/core";
import { MovieProvider } from "../context/MovieContext";
import Movies from "./Movies";

function Pages() {
    return (
        <Tabs variant="outline" defaultValue="home">

        <Tabs.List>
            <Tabs.Tab value="home" >
                Home
            </Tabs.Tab>
            <Tabs.Tab value="favourites" >
                Favourites
            </Tabs.Tab>
            <Tabs.Tab value="watched" >
                Watched
            </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="home">
            <MovieProvider>
                <Movies />
            </MovieProvider>
        </Tabs.Panel>

        <Tabs.Panel value="favourites">
            Favourites tab content
        </Tabs.Panel>

        <Tabs.Panel value="watched">
            Watched tab content
        </Tabs.Panel>
        </Tabs>
    );
}

export default Pages