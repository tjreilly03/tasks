import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from "react";

export function ColoredBox(): React.JSX.Element {
const COLORS = ["red", "blue", "green"];
const [colorIndex, setColorIndex] = useState(0);



function ColorPreview(): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

function ChangeColor(): React.JSX.Element {
    return (
        <div>
        <Button
            onClick={() => {
                act(() => {              
                    setColorIndex((1 + colorIndex) % COLORS.length);
                });
            }}
        >
            Next Color
        </Button>
        <ColorPreview></ColorPreview>
        </div>
    );
}
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor></ChangeColor>
            </div>
        </div>
    );
}
