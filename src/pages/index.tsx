import React from 'react';
import '../app/globals.css'
import Flashcards from '../app/components/Flashcards';
import Navbar from '../app/components/Navbar';
import dummyFlashcards from '@/constants/cards';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <button className="py-4 px-90 bg-blue-900 text-xl font-semibold mb-4 p-2 border rounded-lg text-white transition-transform transform hover:scale-110 ">Flashcards</button>
        <Flashcards flashcards={dummyFlashcards} />
      </main>
    </div>
  );
};

export default Home;
