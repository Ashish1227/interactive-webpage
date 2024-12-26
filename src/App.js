// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Screen from "./components/Screen";
// import screens from "./data/screens";
// import "./styles/App.css";

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState("screen1");

//   const handleOptionClick = (nextScreen) => {
//     setCurrentScreen(nextScreen);
//   };

//   return (
//     <div className="App">
//       {screens[currentScreen] && (
//         <Screen
//           message={screens[currentScreen].message}
//           options={screens[currentScreen].options}
//           onOptionClick={handleOptionClick}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import questions from "./data/questions";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleOptionClick = (option) => {
    const nextStep = option.redirect;
    if (nextStep === "final") {
      setCurrentStep("final");
    } else {
      setCurrentStep(nextStep);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-500 flex items-center justify-center">
      {currentStep === "final" ? (
        <ResultScreen />
      ) : (
        <QuestionScreen
          question={questions[currentStep]}
          handleOptionClick={handleOptionClick}
        />
      )}
    </div>
  );
};

export default App;




