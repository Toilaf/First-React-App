import React from 'react'
import under_construction from '../gifs/barraconstruction.gif'

export default function Footer() {
    return (
        <footer>
            <p>All gifs sourced from GeoCities, found at <a href='http://gifcities.org'>gifcities.org</a>.</p>
            <img src={under_construction} alt='Banner gif that says under construction' className='center'/>
        </footer>
    )
}