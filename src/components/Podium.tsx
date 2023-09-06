import { useEffect, useState } from "react";
import { BreedInfo } from "./Leaderboard";
import { subBreedDash } from "../utils/checkSubBreed";
import { Button } from "@chakra-ui/react";

interface PodiumProps {
    top3Breeds: BreedInfo[];
}
export function Podium({ top3Breeds }: PodiumProps): JSX.Element {
    const [top3BreedImages, setTop3BreedImages] = useState<string[]>([]);

    const getTop3BreedImages = async () => {
        const breedImagesToUpdate = [];
        for (const dog of top3Breeds) {
            const response = await fetch(
                `https://dog.ceo/api/breed/${subBreedDash(
                    dog.breedname
                )}/images/random`
            );
            const jsonBody = await response.json();
            const img = jsonBody.message;
            breedImagesToUpdate.push(img);
        }
        setTop3BreedImages(breedImagesToUpdate);
    };
    useEffect(
        () => {
            getTop3BreedImages();
        },
        // eslint-disable-next-line
        []
    );

    return (
        <>
            <Button
                colorScheme="teal"
                margin={"2vh"}
                onClick={getTop3BreedImages}
            >
                Refresh Top 3 Breed Images
            </Button>
            <div className="container podium">
                <div className="podium__item">
                    <img
                        src={top3BreedImages[1]}
                        alt={top3Breeds[1].breedname}
                    ></img>
                    <p className="podium__breed">
                        {top3Breeds[1].breedname} - {top3Breeds[1].votes} Votes
                    </p>
                    <div className="podium__rank second">🥈</div>
                </div>
                <div className="podium__item">
                    <img
                        src={top3BreedImages[0]}
                        alt={top3Breeds[0].breedname}
                    ></img>
                    <p className="podium__breed">
                        {top3Breeds[0].breedname} - {top3Breeds[0].votes} Votes
                    </p>
                    <div className="podium__rank first">🥇</div>
                </div>
                <div className="podium__item">
                    <img
                        src={top3BreedImages[2]}
                        alt={top3Breeds[2].breedname}
                    ></img>
                    <p className="podium__breed">
                        {top3Breeds[2].breedname} - {top3Breeds[2].votes} Votes
                    </p>
                    <div className="podium__rank third">🥉</div>
                </div>
            </div>
        </>
    );
}
