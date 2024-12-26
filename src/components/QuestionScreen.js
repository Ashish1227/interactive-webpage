// import React from "react";

// const QuestionScreen = ({ question, handleOptionClick }) => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center p-4">
//       <h1 className="text-2xl font-bold text-pink-600 mb-6">{question.text}</h1>
//       <div className="flex flex-col gap-4">
//         {question.options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleOptionClick(option)}
//             className="bg-pink-500 hover:bg-pink-400 text-white py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
//           >
//             {option.text}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionScreen;

import React from "react";
const QuestionScreen = ({ question, handleOptionClick }) => {
    return (
      <div className="flex flex-col items-center justify-center text-center p-4">
        {question.image && (
          <img
            src={question.image}
            alt="Question Illustration"
            className="w-1/2 mb-6 rounded-lg shadow-lg"
          />
        )}
        <h1 className="text-2xl font-bold text-pink-600 mb-6">{question.text}</h1>
        <div className="flex flex-col gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="bg-pink-500 hover:bg-pink-400 text-white py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    );
  };

  export default QuestionScreen;
  