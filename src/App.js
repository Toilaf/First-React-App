import React from 'react';
import Header from './components/Header.js';
import PredictionButton from './components/PredictionButton.js';
import PredictionZone from './components/PredictionZone.js'
import Footer from './components/Footer.js';
import Promises from './components/Promises.js';

export default function App() {
    return (
        <div className='container'>
            <Header />
            <PredictionZone />
            <Footer />
        </div>
    )
}

