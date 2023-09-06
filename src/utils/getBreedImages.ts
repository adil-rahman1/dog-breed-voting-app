import { BreedInfo } from "../components/Leaderboard";
import { subBreedDash } from "./checkSubBreed";

export const getTop3BreedImages = async (top3Breeds: BreedInfo[]) => {
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

    return breedImagesToUpdate;
};

export const getSpecificBreedImage = async (
    leaderboardRank: number,
    top3Breeds: BreedInfo[]
) => {
    const response = await fetch(
        `https://dog.ceo/api/breed/${subBreedDash(
            top3Breeds[leaderboardRank].breedname
        )}/images/random`
    );
    const jsonBody = await response.json();
    const newBreedImageUrl = jsonBody.message;

    return newBreedImageUrl;
};
