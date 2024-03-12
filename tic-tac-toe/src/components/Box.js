import React from "react";

export default function Box(props) {
    return (
        <div className="box" onClick={(event) => {props.handleClick(event)}} player={props.player} clicked={props.clicked} id={props.value} value={props.value}>
            <h1>{props.player}</h1>
        </div>
    )
}