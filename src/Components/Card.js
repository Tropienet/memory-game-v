import React from "react";

const Card = (props) => {
    

    return (
        <>
            <img src={props.source}
                 alt={`${props.source} from adventure time`}
                 onClick={() => {
                    props.randomize()
                    props.incrementScore()
                    props.addCardToList(props.source);
                    }} />
        </>
    )
}

export default Card