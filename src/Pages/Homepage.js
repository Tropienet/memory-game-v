import React from "react"
import MemoryCards from "../Components/MemoryCards";
import Scores from "../Components/Scores";
import "../Layout/siteLayout.css"


const Homepage = () => {
    return (
        <div className="container">
            <Scores className="score-container" />
            <MemoryCards></MemoryCards>
        </div>
    )
}

export default Homepage;