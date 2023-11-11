import React, {useState} from 'react'
import predictionContent from '../predictionContent.js';

export default function PredictionZone({dangerLevel}) {

    const maxLevel = predictionContent.length - 1;
    const currentPrediction = predictionContent[dangerLevel];

    return (
        <main>
            <h1 className='danger-level'>Danger Level: {dangerLevel}/{maxLevel}</h1>
            {currentPrediction.content}
            <img src={currentPrediction.imgSrc} alt={currentPrediction.imgAlt} className='main-img'/>
        </main>
    )
}