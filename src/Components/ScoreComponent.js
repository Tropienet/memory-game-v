import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "../Common/score";

export function ScoreComponent() {
    const score = useSelector(state => state.score.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(reset())}
            >Increment</button>
            <span>{score}</span>
        </div>
    )
}