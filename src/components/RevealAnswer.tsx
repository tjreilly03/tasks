import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
  // State to track whether the answer is visible or not, initially set to false (hidden)
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Function to toggle the visibility of the answer
  const toggleAnswer = () => {
    setIsVisible(prevState => !prevState); // Invert the current visibility state
  };

  return (
    <div>
      {/* Button to toggle the answer visibility */}
      <Button onClick={toggleAnswer}>Reveal Answer</Button>
      
      {/* Conditionally render the answer based on the isVisible state */}
      {isVisible && <p>42</p>}
    </div>
  );
}
