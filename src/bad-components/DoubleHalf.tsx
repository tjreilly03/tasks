import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from "react";



export function DoubleHalf(): React.JSX.Element {

    const [dhValue, setDhValue] = useState(10);

    function Doubler(): React.JSX.Element {
        return (
            <Button
                onClick={() => {
                    act(() => {
                        setDhValue(2 * dhValue);
                    });
                }}
            >
                Double
            </Button>
        );
    }
    
    function Halver(): React.JSX.Element {
        
        return (
            <Button
                onClick={() => {
                    act(() => {
                        setDhValue(0.5 * dhValue);
                    });
                }}
            >
                Halve
            </Button>
        );
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
