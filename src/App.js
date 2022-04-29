import React, {useState} from 'react';
import Header from './components/Header.js';
import PredictionButton from './components/PredictionButton.js';
import PredictionZone from './components/PredictionZone.js'
import Footer from './components/Footer.js';
import Promises from './components/Promises.js';
import predictionContent from './predictionContent.js';

export default function App() {

    const [dangerLevel, setLevel] = useState(3);

    function handleClick() {
        setLevel(Math.floor(Math.random()*predictionContent.length));
    }

    return (
        <div className='container'>
            <Header />
            <PredictionButton handleClick={handleClick}/>
            <PredictionZone dangerLevel={dangerLevel} />
            <Footer />
        </div>
    )
}

