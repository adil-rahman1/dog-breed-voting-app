import { useState } from "react";

interface IBreedsToCompare {
    breedOne: string;
    breedTwo: string;
}

export function Votes(): JSX.Element {
    const [breedsToCompare, setBreedToCompare] = useState<IBreedsToCompare>({
        breedOne: "",
        breedTwo: "",
    });

    return (
        <>
            <h2>Pick your favourite</h2>
            <div>Image 1</div>
            <div>Image 2</div>
        </>
    );
}
