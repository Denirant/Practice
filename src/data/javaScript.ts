import { Question, Test } from "./types";

export const javaScriptTest: Test = {
  id: "id:test/javascript",
  title: "JavaScript",
  testName: "javaScript",
  numOfQuestions: 3,
  duration: 3,
  image: {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdTFY7Hfoj3zABdWBJx9rFe4VOve793XItw&usqp=CAU",
    alt: "javascript",
  },
};

export const javaScriptQuestions: Question[] = [
  {
    id: "id:question/19",
    question: "What keyword is used to declare a constant in JavaScript?",
    options: [
      { id: "id:option/40", text: "let", isCorrect: false },
      { id: "id:option/41", text: "const", isCorrect: true },
      { id: "id:option/42", text: "var", isCorrect: false },
      { id: "id:option/43", text: "define", isCorrect: false },
    ],
    answerDescription:
      "Correct! JavaScript, the const keyword is traditionally used for constant declaration.",
    hint: "Consider the commonly used keyword for declaring constants in JavaScript.",
  },
  {
    id: "id:question/20",
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    options: [
      { id: "id:option/44", text: "add()", isCorrect: false },
      { id: "id:option/45", text: "push()", isCorrect: true },
      { id: "id:option/46", text: "pull()", isCorrect: false },
      { id: "id:option/47", text: "shift()", isCorrect: false },
    ],
    answerDescription: "Correct! The push() method in JavaScript is specifically designed to add elements to the end of an array.",
    hint: "Think about the method name that signifies adding an element to the end of an array.",
  },
  {
    id: "id:question/21",
    question: "What data type in JavaScript is used to represent textual information?",
    options: [
      { id: "id:option/48", text: "String", isCorrect: true },
      { id: "id:option/49", text: "Number", isCorrect: false },
      { id: "id:option/50", text: "Array", isCorrect: false },
      { id: "id:option/51", text: "Boolean", isCorrect: false },
    ],
    answerDescription:
      "Correct! In JavaScript, the string data type is used to represent textual information, such as words and sentences.",
    hint: "Consider the data type that represents sequences of characters.",
  },
];
