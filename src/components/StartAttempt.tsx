import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from "react";

export function StartAttempt(): React.JSX.Element {
    // Initialize state
    const [attempts, setAttempts] = useState(4); // Initially 4 attempts
    const [inProgress, setInProgress] = useState(false); // Quiz is initially not in progress

    // Function to start the quiz
    const startQuiz = () => {
        act(() => {
                setInProgress(true);
                setAttempts((prev) => prev - 1); // Decrease attempts by 1 when starting the quiz
            });
    };

    // Function to stop the quiz
    const stopQuiz = () => {
        act(() => {
            setInProgress(false);
        });
    };

    // Function to mulligan (increase attempts)
    const mulligan = () => {
        act(() => {
            setAttempts((prev) => prev + 1); // Increase attempts by 1
        });
    };

    return (
        <div>
            <h3>Start Attempt</h3>
            <div>
                <p>{attempts}</p>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts === 0} // Disable if quiz is in progress or no attempts left
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={stopQuiz}
                    disabled={!inProgress} // Disable if quiz is not in progress
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={mulligan}
                    disabled={inProgress} // Disable if quiz is in progress
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}