import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {act} from "react";

export function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice() {
    // Initialize dice with two different values
    const [leftDie, setLeftDie] = useState(0);
    const [rightDie, setRightDie] = useState(1);

    // Determine game state
    let gameStatus = null;
    if (leftDie === rightDie) {
        gameStatus = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <div data-testid="left-die">Left Die: {leftDie}</div>
            <div data-testid="right-die">Right Die: {rightDie}</div>
            <Button onClick={() => {setLeftDie(d6())}}>Roll Left</Button>
            <Button onClick={()=>{setRightDie(d6())}}>Roll Right</Button>
            {gameStatus && <div>{gameStatus}</div>}
        </div>
    );
}
