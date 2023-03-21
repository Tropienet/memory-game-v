import React, { useEffect, useState } from "react";
import finn from "./Images/finn.webp"
import bmo from "./Images/bmo.webp"
import fern from "./Images/fern.webp"
import gunther from "./Images/gunther.webp"
import iceKing from "./Images/iceKing.webp"
import jake from "./Images/jake.webp"
import lich from "./Images/lich.webp"
import marceline from "./Images/marceline.webp"
import ogIce from "./Images/ogIce.webp"
import pb from "./Images/pb.webp"
import Card from "./Card";

const MemoryCards = () => {
    const [images, setImages] = useState([finn, bmo, fern, gunther, iceKing, ogIce, pb, lich, marceline, jake])

    useEffect(() => {

    }, [images])

    return (
        <div>
            {images.map(source =>(
                <Card source={source}></Card>
            ))}
        </div>
    )
}

export default MemoryCards;