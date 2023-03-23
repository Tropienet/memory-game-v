import React from "react";
import { useSelector } from "react-redux";

const Scores = () => {
    const score = useSelector(state => state.score.value)

    return (
        <>
            <p>The Current score is {score}</p>
        </>
    )
}

export default Scores;