import axios from "axios";
import { useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
    Heading,
    Button,
} from "@chakra-ui/react";
import { Podium } from "./Podium";

export interface leaderboard {
    id: number;
    breedname: string;
    votes: number;
}
export function Leaderboard(): JSX.Element {
    const backend = "https://dog-breed-voting-c7b1.onrender.com";

    const [leaderboard, setLeaderboard] = useState<leaderboard[]>([]);

    const getLeaderboard = async () => {
        const response = await axios.get(`${backend}/leaderboard`);
        setLeaderboard(response.data);
    };
    useEffect(() => {
        getLeaderboard();
    }, []);

    const leaderboardCopy = [...leaderboard];
    const top3 = leaderboardCopy.splice(0, 3);

    const leaderboardTableRows = leaderboardCopy.map((row, index) => (
        <Tr key={index}>
            <Td>{index + 4}</Td>
            <Td>{row.breedname}</Td>
            <Td>{row.votes}</Td>
        </Tr>
    ));

    return (
        <>
            <Container marginTop={"2vh"} centerContent>
                <Heading marginTop={"2vh"} textAlign={"center"}>
                    Current Leaderboard:
                </Heading>
                <Button
                    onClick={() => {
                        getLeaderboard();
                    }}
                    colorScheme="teal"
                    margin={"2vh"}
                >
                    Refresh Leaderboard
                </Button>
                {top3.length > 0 && <Podium top3Array={top3} />}
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Leaderboard</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Rank</Th>
                                <Th>Breed Name</Th>
                                <Th>Votes</Th>
                            </Tr>
                        </Thead>
                        <Tbody>{leaderboardTableRows}</Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}
