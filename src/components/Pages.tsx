import { Tabs } from "@mantine/core";
import Movies from "./Movies";
import Favourites from "./Favourites";
import Watched from "./Watched";

function Pages() {
    return (
        <Tabs variant="outline" defaultValue="home" mt={'10'}>

            <Tabs.List justify="center" grow>
                <Tabs.Tab value="home" fw={700}>
                    Home
                </Tabs.Tab>
                <Tabs.Tab value="favourites" fw={700} >
                    Favourites
                </Tabs.Tab>
                <Tabs.Tab value="watched" fw={700} >
                    Watched
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="home">
                <Movies />
            </Tabs.Panel>

            <Tabs.Panel value="favourites">
                <Favourites />
            </Tabs.Panel>

            <Tabs.Panel value="watched">
                <Watched />
            </Tabs.Panel>
        </Tabs>
    );
}

export default Pages