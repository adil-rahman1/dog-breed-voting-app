import { Votes } from "./Votes";
import "./App.css";
import { Leaderboard } from "./Leaderboard";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <Votes />
                <Leaderboard />
                <a href="https://dog.ceo/dog-api/">API Source</a>
            </ChakraProvider>
        </div>
    );
}

export default App;
