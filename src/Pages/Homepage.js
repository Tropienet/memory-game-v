import React from "react"
import MemoryCards from "../Components/MemoryCards";
import Scores from "../Components/Scores";


const Homepage = () => {
    return (
        <div>
            <Scores />
            <MemoryCards></MemoryCards>
        </div>
    )
}

export default Homepage;