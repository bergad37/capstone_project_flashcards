import React from 'react';
import '../app/globals.css'
import Flashcards from '../app/components/Flashcards';
import Navbar from '../app/components/Navbar';

const dummyFlashcards = [
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    question: 'What is the Biggest planet?',
    answer: 'Jupiter',
  },
  {
    question: 'How many people are on Earth?',
    answer: 'Jupiter',
  },
  {
    question: 'Who discovered USA?',
    answer: 'Jupiter',
  },
  {
    question: 'Who was the forst president of Russia?',
    answer: 'Jupiter',
  },
  {
    question: 'Where is mount everest located?',
    answer: 'Jupiter',
  },
  {
    question: 'Who owns Arm company?',
    answer: 'Jupiter',
  },
  // Add more flashcards here...
];

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <button className="py-4 px-90 bg-blue-900 text-3xl font-semibold mb-4 p-5 border rounded-lg text-white transition-transform transform hover:scale-110 ">Flashcards</button>
        <Flashcards flashcards={dummyFlashcards} />
      </main>
    </div>
  );
};

export default Home;
