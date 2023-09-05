import { leaderboard } from "./Leaderboard";

interface PodiumProps {
    top3Array: leaderboard[];
}
export function Podium({ top3Array }: PodiumProps): JSX.Element {
    return (
        <>
            <div className="container podium">
                <div className="podium__item">
                    <p className="podium__breed">{top3Array[1].breedname}</p>
                    <div className="podium__rank second">🥈</div>
                </div>
                <div className="podium__item">
                    <p className="podium__breed">{top3Array[0].breedname}</p>
                    <div className="podium__rank first">🥇</div>
                </div>
                <div className="podium__item">
                    <p className="podium__breed">{top3Array[2].breedname}</p>
                    <div className="podium__rank third">🥉</div>
                </div>
            </div>
        </>
    );
}
