import React from 'react'

import flee from './gifs/skullflee.gif'

let x = (Math.floor(Math.random()*3)).toString();
//x = 3;

function generatePrediction(x) {
    let weather = '';
    let message = '';
    if (x === 0) {
        weather = 'Clear'
        message = 'Low Danger Today'
    } else if (x === 1) {
        weather = 'Concern'
        message = <h3>Generate Anxiety. Pack Your Bags. The Sky Darkens</h3>
    } else if (x === 2) {
        weather = 'Danger'
        message = <h3>Your Loved Ones Are Swayed By Its Aura. Do Not Fall Into Its Vortex Of Cruel Manipulation. The Flaming Skull Is Upon Us</h3>
    } else if (x === 3) {
        weather = 'TooLate'
        message = 
            <div>
                <h3>IT IS TOO LATE. FEAR FOR YOUR LIFE.</h3>
                <h2>THE FLAMING SKULL</h2>
                <h1>IS HERE</h1>
                <img src={flee} alt='Gif of a red-tinted skull frantically rotating overlaid with the word flee' />
            </div>
    }
    return message
}


export default function App() {
    return (
        <main>
            <h1>Danger Level: {x}</h1>
            {generatePrediction(x)}
            <p>Put buttons here</p>
        </main>
    )
}