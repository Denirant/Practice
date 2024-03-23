import { Question, Test } from "./types";

export const mathTest: Test = {
  id: "id:test/javascript",
  title: "Math",
  testName: "math",
  numOfQuestions: 7,
  duration: 7,
  image: {
    uri: "data:image/jpeg;base64,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",
    alt: "math",
  },
};

export const mathQuestions: Question[] = [
  {
    id: "id:question/19",
    question: "Which planet is known as the 'Red Planet'?",
    options: [
      { id: "id:option/40", text: "Earth", isCorrect: false },
      { id: "id:option/41", text: "Mars", isCorrect: true },
      { id: "id:option/42", text: "Jupiter", isCorrect: false },
      { id: "id:option/43", text: "Venus", isCorrect: false },
    ],
    answerDescription:
      "Correct! Mars is known as the 'Red Planet' due to its reddish appearance.",
    hint: "This planet is often studied for potential signs of past life.",
  },
  {
    id: "id:question/20",
    question: "Which planet is the closest to the Sun?",
    options: [
      { id: "id:option/44", text: "Mars", isCorrect: false },
      { id: "id:option/45", text: "Venus", isCorrect: false },
      { id: "id:option/46", text: "Mercury", isCorrect: true },
      { id: "id:option/47", text: "Earth", isCorrect: false },
    ],
    answerDescription: "Correct! Mercury is the closest planet to the Sun.",
    hint: "It has extreme temperatures, ranging from extremely hot to extremely cold.",
  },
  {
    id: "id:question/21",
    question: "Which planet is known as the 'Giant of the Solar System'?",
    options: [
      { id: "id:option/48", text: "Jupiter", isCorrect: true },
      { id: "id:option/49", text: "Saturn", isCorrect: false },
      { id: "id:option/50", text: "Uranus", isCorrect: false },
      { id: "id:option/51", text: "Neptune", isCorrect: false },
    ],
    answerDescription:
      "Correct! Jupiter is known as the 'Giant of the Solar System' due to its massive size.",
    hint: "It is a gas giant and has a strong magnetic field.",
  },
  {
    id: "id:question/22",
    question: "Which planet is known for its prominent ring system?",
    options: [
      { id: "id:option/52", text: "Mars", isCorrect: false },
      { id: "id:option/53", text: "Jupiter", isCorrect: false },
      { id: "id:option/54", text: "Saturn", isCorrect: true },
      { id: "id:option/55", text: "Uranus", isCorrect: false },
    ],
    answerDescription:
      "Correct! Saturn is known for its prominent ring system.",
    hint: "These rings are made up of ice, rocks, and dust particles.",
  },
  {
    id: "id:question/23",
    question:
      "Which planet is often referred to as the 'Morning Star' or 'Evening Star'?",
    options: [
      { id: "id:option/56", text: "Mars", isCorrect: false },
      { id: "id:option/57", text: "Venus", isCorrect: true },
      { id: "id:option/58", text: "Mercury", isCorrect: false },
      { id: "id:option/59", text: "Jupiter", isCorrect: false },
    ],
    answerDescription:
      "Correct! Venus is often referred to as the 'Morning Star' or 'Evening Star'.",
    hint: "It is the second planet from the Sun and is similar in size and composition to Earth.",
  },
  {
    id: "id:question/24",
    question:
      "Which planet is known for its prominent system of colorful rings?",
    options: [
      { id: "id:option/60", text: "Jupiter", isCorrect: false },
      { id: "id:option/61", text: "Saturn", isCorrect: false },
      { id: "id:option/62", text: "Uranus", isCorrect: false },
      { id: "id:option/63", text: "Neptune", isCorrect: false },
    ],
    answerDescription:
      "Correct! Uranus is known for its prominent system of colorful rings.",
    hint: "It is an ice giant and has a unique tilt in its rotational axis.",
  },
];
