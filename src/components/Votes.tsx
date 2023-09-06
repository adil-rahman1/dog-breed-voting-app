import axios from "axios";
import { useEffect, useState } from "react";
import { extractDogBreedName } from "../extractDogBreedName";
import { Heading, Container, Text } from "@chakra-ui/react";
import { readableDogBreedName } from "../readableDogBreedName";
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
interface IBreedsToCompare {
    breedOneUrl: string;
    breedTwoUrl: string;
}

const baseUrl = "https://dog-breed-voting-c7b1.onrender.com";

export function Votes(): JSX.Element {
    const [breedsToCompare, setBreedsToCompare] = useState<IBreedsToCompare>({
        breedOneUrl: "",
        breedTwoUrl: "",
    });

    const getAndStoreTwoRandomBreeds = async () => {
        try {
            let breedOneUrl, breedTwoUrl;

            do {
                const response = await axios.get(
                    "https://dog.ceo/api/breeds/image/random/2"
                );
                [breedOneUrl, breedTwoUrl] = response.data.message;
            } while (
                extractDogBreedName(breedOneUrl) ===
                extractDogBreedName(breedTwoUrl)
            );

            setBreedsToCompare({
                breedOneUrl,
                breedTwoUrl,
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getAndStoreTwoRandomBreeds();
    }, []);

    const handleVote = async (votedBreedUrl: string) => {
        const breedName = extractDogBreedName(votedBreedUrl);
        try {
            await axios.post(`${baseUrl}/breeds/${breedName}`);
            getAndStoreTwoRandomBreeds();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Container marginTop={"2vh"} centerContent>
                <Heading marginTop={"2vh"} textAlign={"center"}>
                    Pick Your Favourite:
                </Heading>
                <div className="voting">
                    <div className="dog-vote-image">
                        <img
                            onClick={() =>
                                handleVote(breedsToCompare.breedOneUrl)
                            }
                            src={breedsToCompare.breedOneUrl}
                            alt=""
                        />
                        <Text className="dog-vote-name" as={"b"}>
                            {extractDogBreedName(
                                breedsToCompare.breedOneUrl
                            ) !== undefined &&
                                readableDogBreedName(
                                    extractDogBreedName(
                                        breedsToCompare.breedOneUrl
                                    )
                                )}
                        </Text>
                    </div>
                    <Heading marginTop={"3vh"} textAlign={"center"}>
                        vs
                    </Heading>
                    <div className="dog-vote-image">
                        <img
                            onClick={() =>
                                handleVote(breedsToCompare.breedTwoUrl)
                            }
                            src={breedsToCompare.breedTwoUrl}
                            alt=""
                        />
                        <Text className="dog-vote-name" as={"b"}>
                            {extractDogBreedName(
                                breedsToCompare.breedTwoUrl
                            ) !== undefined &&
                                readableDogBreedName(
                                    extractDogBreedName(
                                        breedsToCompare.breedTwoUrl
                                    )
                                )}
                        </Text>
                    </div>
                </div>
            </Container>
        </>
    );
}
