import React from 'react';

interface Flashcard {
  question: string;
  answer: string;
}

interface FlashcardsProps {
  flashcards: Flashcard[];
}

const Flashcards: React.FC<FlashcardsProps> = ({ flashcards }) => {
  return (
    <div className='flex flex-wrap'>
    {flashcards.map((flashcard, index) => (
      <div key={index} className="w-30 border mx-auto rounded-lg shadow-md m-10 text-center flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front p-5">
            <h2 className="text-xl font-semibold mb-2 flex-1 ">{flashcard.question}</h2>
          </div>
          <div className="flip-card-back flex items-center justify-center">
            <p className="text-gray-600">{flashcard.answer}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Flashcards;