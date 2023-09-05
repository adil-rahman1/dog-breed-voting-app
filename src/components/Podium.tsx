import { useEffect, useState } from "react";
import { leaderboard } from "./Leaderboard";
import { subBreedDash } from "../utils/checkSubBreed";

interface PodiumProps {
    top3Array: leaderboard[];
}
export function Podium({ top3Array }: PodiumProps): JSX.Element {
    const [top3Images, setTop3Images] = useState<string[]>([]);

    const getImages = async () => {
        const images = [];
        for (const dog of top3Array) {
            const response = await fetch(
                `https://dog.ceo/api/breed/${subBreedDash(
                    dog.breedname
                )}/images/random`
            );
            const jsonBody = await response.json();
            const img = jsonBody.message;
            images.push(img);
        }
        setTop3Images(images);
    };
    useEffect(
        () => {
            getImages();
        },
        // eslint-disable-next-line
        []
    );

    console.log(top3Array);
    console.log(top3Images);

    return (
        <>
            <div className="container podium">
                <div className="podium__item">
                    <img src={top3Images[1]} alt={top3Array[1].breedname}></img>
                    <p className="podium__breed">{top3Array[1].breedname}</p>
                    <div className="podium__rank second">🥈</div>
                </div>
                <div className="podium__item">
                    <img src={top3Images[0]} alt={top3Array[0].breedname}></img>
                    <p className="podium__breed">{top3Array[0].breedname}</p>
                    <div className="podium__rank first">🥇</div>
                </div>
                <div className="podium__item">
                    <img src={top3Images[2]} alt={top3Array[2].breedname}></img>
                    <p className="podium__breed">{top3Array[2].breedname}</p>
                    <div className="podium__rank third">🥉</div>
                </div>
            </div>
        </>
    );
}
