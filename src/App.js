import { useContext, useState } from 'react';
import StepContext from './context/StepContext';
import './App.scss';
import Header from './components/header/Header';
import MetaData from './components/metaData/MetaData';
import DarkModeContext from './context/DarkMode';

function App() {

  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <StepContext.Provider value={{step, setStep}}>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
    <div className="App">
      <Header/>
      <section className="App-container">
        <div className="App-left">
          <div>
            <p>Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich. 
            </p>
            <p>
            Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.
            </p>
          </div>
          <MetaData step={step}/>
        </div>
        <div className="App-right" style={{backgroundImage: (darkMode && step === 2) ? "url(./assets/IMG-2.png)" : "url(./assets/IMG-1.png)" }}>
          { (!darkMode || step === 1 || step === 3)  && <img className='App-right__img' src={`./assets/Lamp-${step}.png`}/>}
        </div>
      </section>
    </div>
    </DarkModeContext.Provider>
    </StepContext.Provider>
  );
}

export default App;
