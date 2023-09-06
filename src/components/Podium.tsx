import { useEffect, useState } from "react";
import { BreedInfo } from "./Leaderboard";
import { Button, Text } from "@chakra-ui/react";
import {
    getSpecificBreedImage,
    getTop3BreedImages,
} from "../utils/getBreedImages";
import { readableDogBreedName } from "../readableDogBreedName";

interface PodiumProps {
    top3Breeds: BreedInfo[];
}
export function Podium({ top3Breeds }: PodiumProps): JSX.Element {
    const [top3BreedImages, setTop3BreedImages] = useState<string[]>([]);

    const getAndStoreTop3BreedImages = async () => {
        setTop3BreedImages(await getTop3BreedImages(top3Breeds));
    };

    const getAndStoreSpecificBreedImage = async (leaderboardRank: number) => {
        const newBreedImage = await getSpecificBreedImage(
            leaderboardRank,
            top3Breeds
        );
        setTop3BreedImages((prev) => {
            const newTop3BreedImages = [...prev];
            newTop3BreedImages[leaderboardRank] = newBreedImage;
            return newTop3BreedImages;
        });
    };

    useEffect(
        () => {
            getAndStoreTop3BreedImages();
        },
        // eslint-disable-next-line
        []
    );

    return (
        <>
            <Button
                colorScheme="teal"
                margin={"2vh"}
                onClick={getAndStoreTop3BreedImages}
            >
                Refresh Top 3 Breed Images
            </Button>
            <div className="container podium">
                <div className="podium__item">
                    <Text as="b">
                        {readableDogBreedName(top3Breeds[1].breedname)} <br />{" "}
                        {top3Breeds[1].votes} Votes
                    </Text>
                    <button onClick={() => getAndStoreSpecificBreedImage(1)}>
                        <img
                            src={top3BreedImages[1]}
                            alt={top3Breeds[1].breedname}
                        ></img>
                    </button>
                    <div className="podium__rank second">🥈</div>
                </div>
                <div className="podium__item">
                    <Text as="b">
                        {readableDogBreedName(top3Breeds[0].breedname)} <br />{" "}
                        {top3Breeds[0].votes} Votes
                    </Text>
                    <button onClick={() => getAndStoreSpecificBreedImage(0)}>
                        <img
                            src={top3BreedImages[0]}
                            alt={top3Breeds[0].breedname}
                        ></img>
                    </button>
                    <div className="podium__rank first">🥇</div>
                </div>
                <div className="podium__item">
                    <Text as="b">
                        {readableDogBreedName(top3Breeds[2].breedname)} <br />{" "}
                        {top3Breeds[2].votes} Votes
                    </Text>
                    <button onClick={() => getAndStoreSpecificBreedImage(2)}>
                        <img
                            src={top3BreedImages[2]}
                            alt={top3Breeds[2].breedname}
                        ></img>
                    </button>
                    <div className="podium__rank third">🥉</div>
                </div>
            </div>
        </>
    );
}
