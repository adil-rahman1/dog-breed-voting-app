import axios from "axios";
import { useEffect, useState } from "react";
import { extractDogBreedName } from "../extractDogBreedName";
import { Heading, Container } from "@chakra-ui/react";
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
                        <p className="dog-vote-name">
                            {extractDogBreedName(breedsToCompare.breedOneUrl)}
                        </p>
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
                        <p className="dog-vote-name">
                            {extractDogBreedName(breedsToCompare.breedTwoUrl)}
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
}
