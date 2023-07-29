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
      <div key={index} className=" border mx-auto rounded-lg shadow-md m-10 text-center flip-card">
        <div><h1 className='text-gray-700 font-semibold'>{index+1}/{flashcards.length}</h1></div>
        <div className="flip-card-inner">
          <div className="flip-card-front p-5">
            <h2 className="text-xl font-semibold mb-2 flex-1 ">{flashcard.question}</h2>
          </div>
          <div className="flip-card-back flex items-center justify-center">
            <h1 className='text-blue-600'>Answer:</h1>
            <h2 className="text-gray-600">{flashcard.answer}</h2>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Flashcards;