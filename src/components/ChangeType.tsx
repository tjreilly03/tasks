import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question"; // Assuming the QuestionType is defined as a type alias

export function ChangeType(): React.JSX.Element {
  // Initialize state with "short_answer_question"
  const [questionType, setQuestionType] = useState<QuestionType>("short_answer_question");

  // Toggle function to change the state between "multiple_choice_question" and "short_answer_question"
  const toggleType = () => {
    setQuestionType(prevType => prevType === "short_answer_question" ? "multiple_choice_question" : "short_answer_question");
  };

  return (
    <div>
      {/* Render the appropriate text based on the current question type */}
      <p>{questionType === "multiple_choice_question" ? "Multiple Choice" : "Short Answer"}</p>
      
      {/* Button to toggle the question type */}
      <Button onClick={toggleType}>Change Type</Button>
    </div>
  );
}
