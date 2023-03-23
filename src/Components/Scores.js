import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Scores = () => {
    const score = useSelector(state => state.score.value)
    const [highScore, setHighScore] = useState(0);

    function checkHighScore() {
        if(highScore<score) {
            setHighScore(score)
        }
    }

    useEffect(() => {
        checkHighScore()
    }, [score])

    return (
        <div>
            <p>The Current score is {score}</p>
            <p>The Current HighScore is {highScore}</p>
        </div>
    )
}

export default Scores;