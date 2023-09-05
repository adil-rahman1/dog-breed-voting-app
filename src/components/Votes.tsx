import axios from "axios";
import { useEffect, useState } from "react";

interface IBreedsToCompare {
    breedOne: string;
    breedTwo: string;
}

export function Votes(): JSX.Element {
    const [breedsToCompare, setBreedsToCompare] = useState<IBreedsToCompare>({
        breedOne: "",
        breedTwo: "",
    });

    const getAndStoreTwoRandomBreeds = async () => {
        try {
            const response = await axios.get(
                "https://dog.ceo/api/breeds/image/random/2"
            );
            const [breedOne, breedTwo] = response.data.message;
            setBreedsToCompare({ breedOne, breedTwo });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getAndStoreTwoRandomBreeds();
    }, []);

    useEffect(() => {
        console.log("breeds to compare:", breedsToCompare);
    }, [breedsToCompare]);

    return (
        <>
            <h2>Pick your favourite</h2>
            <div>
                <img src={breedsToCompare.breedOne} alt="" />
            </div>
            <div>
                <img src={breedsToCompare.breedTwo} alt="" />
            </div>
        </>
    );
}
