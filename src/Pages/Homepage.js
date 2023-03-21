import React from "react"
import { ScoreComponent } from "../Components/ScoreComponent";
import MemoryCards from "../Components/MemoryCards";


const Homepage = () => {
    return (
        <div>
            Hello World
            <ScoreComponent />
            <MemoryCards></MemoryCards>
        </div>
    )
}

export default Homepage;