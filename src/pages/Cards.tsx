import React from 'react';
import '../app/globals.c'
import Flashcards from '../app/components/Flashcards';
import Navbar from '../app/components/Navbar';

const dummyFlashcards = [
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
  },
  // Add more flashcards here...
];

const Cards: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <button className="py-4 px-90 bg-blue-900 text-3xl font-semibold mb-4 p-5 border rounded-lg text-white transition-transform transform hover:scale-200 transition-transform duration-5000 ">+ Create New Card</button>
        <Flashcards flashcards={dummyFlashcards} />
      </main>
    </div>
  );
};

export default Cards;
