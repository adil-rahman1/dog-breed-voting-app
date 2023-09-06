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

export interface BreedInfo {
    id: number;
    breedname: string;
    votes: number;
}

export function Leaderboard(): JSX.Element {
    const expressApiUrl = "https://dog-breed-voting-c7b1.onrender.com";
    const [top10Breeds, setTop10Breeds] = useState<BreedInfo[]>([]);

    const getTop10Breeds = async () => {
        const response = await axios.get(`${expressApiUrl}/leaderboard`);
        setTop10Breeds(response.data);
    };
    useEffect(() => {
        getTop10Breeds();
    }, []);

    const top10BreedsCopy = [...top10Breeds];
    const top3Breeds = top10BreedsCopy.splice(0, 3);

    const leaderboardTableRows = top10BreedsCopy.map((row, index) => (
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
                        getTop10Breeds();
                    }}
                    colorScheme="teal"
                    margin={"2vh"}
                >
                    Refresh Leaderboard
                </Button>
                {top3Breeds.length >= 3 && <Podium top3Breeds={top3Breeds} />}
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
