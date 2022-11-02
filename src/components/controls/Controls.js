import React, {useContext} from 'react';
import StepContext from '../../context/StepContext';
import DarkModeContext from '../../context/DarkMode';
import './Controls.scss';

const Controls = () => {

    const { step, setStep } = useContext(StepContext);
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const LAMP1 = 1;
    const LAMP2 = 2;
    const LAMP3 = 3;

    const activedStep = (selectedStep) => {
        if (step === selectedStep) 
            return "active";
        else return;
    }

    
    return (
        <div className='controls'>
            <div className='controls__steps'>
                <img src='./assets/Lamp-1.png' className={activedStep(LAMP1)} onClick={() => setStep(LAMP1)}></img>
                <img src='./assets/Lamp-2.png' className={activedStep(LAMP2)} onClick={() => setStep(LAMP2)}></img>
                <img src='./assets/Lamp-3.png' className={activedStep(LAMP3)} onClick={() => setStep(LAMP3)}></img>
            </div>
            { step === LAMP2 &&<div className='controls-mode'>
                <img className='controls-mode__light' src="./assets/light.svg" onClick={() => setDarkMode(false)}/>
                <img className='controls-mode__dark' src="./assets/dark.svg" onClick={() => setDarkMode(true)}/>
            </div>}
        </div>
    );
};

export default Controls;