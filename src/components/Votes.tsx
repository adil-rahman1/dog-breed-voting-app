import axios from "axios";
import { useEffect, useState } from "react";
import { extractDogBreedName } from "../extractDogBreedName";
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
            const response = await axios.get(
                "https://dog.ceo/api/breeds/image/random/2"
            );
            const [breedOneUrl, breedTwoUrl] = response.data.message;
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
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h2>Pick your favourite</h2>
            <div>
                <img
                    onClick={() => handleVote(breedsToCompare.breedOneUrl)}
                    src={breedsToCompare.breedOneUrl}
                    alt=""
                />
            </div>
            <div>
                <img
                    onClick={() => handleVote(breedsToCompare.breedTwoUrl)}
                    src={breedsToCompare.breedTwoUrl}
                    alt=""
                />
            </div>
        </>
    );
}
