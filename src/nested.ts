import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import {
    makeBlankQuestion,
    isCorrect,
    isValid,
    toShortForm,
    toMarkdown,
    duplicateQuestion,
    renameQuestion,
    publishQuestion,
    addOption,
    mergeQuestion,
} from "./objects";
/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQs = questions.filter(
        // Check if the string in `sentence` includes the substring "?"
        (question: Question): boolean => question.published);
    return publishedQs;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQs = questions.filter(
        // Check if the string in `sentence` includes the substring "?"
        (question: Question): boolean => !((question.body == null || question.body == "") && (question.expected == null || question.expected == "") && (question.options.length == 0)));
    return nonEmptyQs;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const nonEmptyQs = questions.filter(
        // Check if the string in `sentence` includes the substring "?"
        (question: Question): boolean => question.id == id);
    if(nonEmptyQs.length <=0) return null;
    else return nonEmptyQs[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
        const nonEmptyQs = questions.filter(
        // Check if the string in `sentence` includes the substring "?"
        (question: Question): boolean => question.id != id);
    return nonEmptyQs;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    const tripledLowPrices = questions.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (questions: Question): string => true ? questions.name : questions.name
      );
      return tripledLowPrices;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const tripledLowPrices = questions.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (questions: Question): Answer => true ? {
            /** The ID of the question being answered. */
            questionId: questions.id,
            /** The text that the student entered for their answer. */
            text: "",
            /** Whether or not the student has submitted this answer. */
            submitted: false,
            /** Whether or not the students' answer matched the expected. */
            correct: false
        } : {
            /** The ID of the question being answered. */
            questionId: questions.id,
            /** The text that the student entered for their answer. */
            text: "",
            /** Whether or not the student has submitted this answer. */
            submitted: false,
            /** Whether or not the students' answer matched the expected. */
            correct: false
        }
      );
      return tripledLowPrices;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    const tripledLowPrices = questions.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (questions: Question): Question => true ? {id: questions.id, name: questions.name, body : questions.body, type : questions.type, options : questions.options, expected : questions.expected, points : questions.points, published: true} : {id: questions.id, name: questions.name, body : questions.body, type : questions.type, options : questions.options, expected : questions.expected, points : questions.points, published: true}
      );
      return tripledLowPrices;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const newQuestion = makeBlankQuestion(id,name,type);
    const finalquestions = [...questions];
    finalquestions.push(newQuestion);
    return finalquestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const tripledLowPrices = questions.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (questions: Question): Question => questions.id == targetId ? {id: questions.id, name: newName, body : questions.body, type : questions.type, options : questions.options, expected : questions.expected, points : questions.points, published: questions.published} : {id: questions.id, name: questions.name, body : questions.body, type : questions.type, options : questions.options, expected : questions.expected, points : questions.points, published: questions.published}
      );
      return tripledLowPrices;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    const question = questions.filter(
        // Check if the string in `sentence` includes the substring "?"
        (question: Question): boolean => question.id == targetId);
    const newoptions = [...question[0].options];
    if(targetOptionIndex == -1){
        newoptions.push(newOption);
    }   
    else{
        newoptions[targetOptionIndex] = newOption;
    }
    const tripledLowPrices = questions.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (questions: Question): Question => questions.id == targetId ? {id: questions.id, name: questions.name, body : questions.body, type : questions.type, options : newoptions, expected : questions.expected, points : questions.points, published: questions.published} : {id: questions.id, name: questions.name, body : questions.body, type : questions.type, options : questions.options, expected : questions.expected, points : questions.points, published: questions.published}
      );
      return tripledLowPrices;
}