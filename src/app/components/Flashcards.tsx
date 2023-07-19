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
    <div className="flex space-y-4 ">
      <div className='flex flex-wrap w-[4rem]'>
      {flashcards.map((flashcard, index) => (
        <div key={index} className=" w-{60%} border p-5 mx-auto rounded-lg shadow-md m-10 p-[5rem] text-center transition-transform transform hover:scale-110 ">
          <h2 className="text-xl font-semibold mb-2  ">{flashcard.question}</h2>
          <p className="text-gray-600">{flashcard.answer}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Flashcards;
