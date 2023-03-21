import React from "react";

const Card = (props) => {
    return (
        <>
            <img src={props.source} alt={`${props.source} from adventure time`} />
        </>
    )
}

export default Card