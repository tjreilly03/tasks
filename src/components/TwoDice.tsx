import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {act} from "react";

export function TwoDice() {
    // Initialize dice with two different values
    const [leftDie, setLeftDie] = useState(() => Math.floor(Math.random() * 6) + 1);
    const [rightDie, setRightDie] = useState(() => {
        let value;
        do {
            value = Math.floor(Math.random() * 6) + 1;
        } while (value === leftDie);
        return value;
    });

    // Function to roll the left die
    const rollLeft = () => {
        act(() => {
            const newLeftDie = Math.floor(Math.random() * 6) + 1;
            setLeftDie(newLeftDie);
                });
        
    };

    // Function to roll the right die
    const rollRight = () => {
        act(() => {
            const newRightDie = Math.floor(Math.random() * 6) + 1;
        setRightDie(newRightDie);
                });
    };

    // Determine game state
    let gameStatus = null;
    if (leftDie === rightDie) {
        gameStatus = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <div data-testid="left-die">Left Die: {leftDie}</div>
            <div data-testid="right-die">Right Die: {rightDie}</div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {gameStatus && <div>{gameStatus}</div>}
        </div>
    );
}
