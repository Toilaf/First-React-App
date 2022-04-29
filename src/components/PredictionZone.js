import React, {useState} from 'react'
import Prediction from './Prediction.js';
import predictionContent from '../predictionContent.js';

import trumpet from '../gifs/trumpet.gif'
import glowspin from '../gifs/glowingskull.gif'
import glow from '../gifs/skullglow.gif'
import flee from '../gifs/skullflee.gif'


export default function PredictionZone({dangerLevel}) {

    const maxLevel = predictionContent.length - 1;
    const currentPrediction = predictionContent[dangerLevel];

    return (
        <main>
            <Prediction dangerLevel={dangerLevel} maxLevel={maxLevel} content={currentPrediction.content} imgSrc={currentPrediction.imgSrc} imgAlt={currentPrediction.imgAlt} />
        </main>
    )
}