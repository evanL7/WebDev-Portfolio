import React from "react";
import "./Die.css";

function Die({ value, isHeld, holdDice, }) {
    return (
        <>
            <div
                className={`die ${isHeld ? 'die--held' : ''}`}
                onClick={holdDice}
            >
                {value}
            </div>
        </>
    )
}

export default Die;