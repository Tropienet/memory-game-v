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
import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "../Common/score";
import "../Layout/memoryCardStyle.css"

const MemoryCards = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState([finn, bmo, fern, gunther, iceKing, ogIce, pb, lich, marceline, jake])
    const [cardsThatWereClicked, setCardsThatWereClicked] = useState([]);

    function addCardToClickedList(card) {
        if(!cardsThatWereClicked.includes(card)) {
            setCardsThatWereClicked(cardsThatWereClicked.concat(card))
            console.log(cardsThatWereClicked);
        }else {
            dispatch(reset())
            setCardsThatWereClicked([])
        }
    }

    function randomizeImages() {
        let array = [...images];
        let currentIndex = array.length;
        
        while(currentIndex !== 0) {

            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }
        setImages(array)
    }

    useEffect(() => {
    }, [images])

    return (
        <div>
            {images.map((source, index) =>(
                <Card source={source}
                      addCardToList={addCardToClickedList}
                      randomize={randomizeImages}
                      incrementScore={() => dispatch(increment())}
                      key={index}></Card>
            ))}
        </div>
    )
}

export default MemoryCards;