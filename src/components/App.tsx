import { Votes } from "./Votes";
import "./App.css";
import { Leaderboard } from "./Leaderboard";
import { Button, Card, Container, useColorMode } from "@chakra-ui/react";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="App">
            <Container maxW="50vw">
                <Card>
                    <header>
                        <Button onClick={toggleColorMode}>
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Button>
                    </header>
                    <Votes />
                    <Leaderboard />
                </Card>
            </Container>
            <a href="https://dog.ceo/dog-api/">API Source</a>
        </div>
    );
}

export default App;
