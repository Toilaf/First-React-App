import React from 'react'
import trumpet from './gifs/trumpet.gif'
import glowspin from './gifs/glowingskull.gif'
import glow from './gifs/skullglow.gif'
import flee from './gifs/skullflee.gif'

export default [
    {
        content: <>
                <p>You are safe.</p>
                <p>For now.</p>
            </>,
        imgSrc: trumpet,
        imgAlt: 'Gif of a skull playing the trumpet'
    },
    {
        content: <>
            <h3>The Sky Darkens. Be Concerned. Pack Your Bags</h3>
            </>,
        imgSrc: glowspin,
        imgAlt: 'Gif of a skull with glowing eyes rotating'
    },
    {
        content: <>
                <h3>Your Loved Ones Are Swayed By Its Aura. Do Not Fall Into Its Vortex Of Cruel Manipulation. The Flaming Skull Is Upon Us</h3>
            </>,
        imgSrc: glow,
        imgAlt: 'Gif of a skull with a pulsating rainbow aura'
    },
    {
        content: <>
                <h3>IT IS TOO LATE. FEAR FOR YOUR LIFE.</h3>
                <h2 className='too-late'>THE FLAMING SKULL</h2>
                <h1 className='too-late'>IS HERE</h1>
            </>,
        imgSrc: flee,
        imgAlt: 'Gif of a red-tinted skull frantically rotating overlaid with the word flee'
    }
]