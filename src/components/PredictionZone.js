import React, {useState} from 'react'

import trumpet from '../gifs/trumpet.gif'
import glowspin from '../gifs/glowingskull.gif'
import glow from '../gifs/skullglow.gif'
import flee from '../gifs/skullflee.gif'


let x = (Math.floor(Math.random()*4)).toString();

/* function randNum() {

    // let [state, setRandom] = useState(ans);

    return ans
} */

function generatePrediction(x) {
    x = (Math.floor(Math.random()*4)).toString();

    let weather = '';
    let message = '';
    if (x === 0) {
        weather = 'Clear'
        message = 
            <>
                <p>You are safe.</p>
                <p>For now.</p>
                <img src={trumpet} alt='Gif of a skull playing the trumpet' className='main-img'/>
            </>
    } else if (x === 1) {
        weather = 'Concern'
        message = 
            <>
                <h3>The Sky Darkens. Be Concerned. Pack Your Bags</h3>
                <img src={glowspin} alt='Gif of a skull with glowing eyes rotating' className='main-img'/>
            </>
    } else if (x === 2) {
        weather = 'Danger'
        message = 
            <>
                <h3>Your Loved Ones Are Swayed By Its Aura. Do Not Fall Into Its Vortex Of Cruel Manipulation. The Flaming Skull Is Upon Us</h3>
                <img src={glow} alt='Gif of a skull with a pulsating rainbow aura' className='main-img'/>
            </>
    } else if (x === 3) {
        weather = 'TooLate'
        message = 
            <>
                <h3>IT IS TOO LATE. FEAR FOR YOUR LIFE.</h3>
                <h2 className='too-late'>THE FLAMING SKULL</h2>
                <h1 className='too-late'>IS HERE</h1>
                <img src={flee} alt='Gif of a red-tinted skull frantically rotating overlaid with the word flee' className='main-img'/>
            </>
    }
    return message
}


export default function PredictionZone() {
    return (
        <main>
            <h1 className='danger-level'>Danger Level: {x}/3</h1>
            {generatePrediction(x)}
        </main>
    )
}