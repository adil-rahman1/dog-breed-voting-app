import { Votes } from "./Votes";
import "./App.css";
import { Leaderboard } from "./Leaderboard";
import {
    Button,
    Container,
    Heading,
    Stack,
    useColorMode,
} from "@chakra-ui/react";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="App">
            <Container>
                <Heading>
                    <Stack align={"center"}>
                        <Button onClick={toggleColorMode}>
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Button>
                    </Stack>
                </Heading>
                <Votes />
                <Leaderboard />
            </Container>
            <a href="https://dog.ceo/dog-api/">API Source</a>
        </div>
    );
}

export default App;
