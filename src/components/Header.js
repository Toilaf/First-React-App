import React from 'react'
import under_construction from '../gifs/underconstruction.gif'

export default function Header() {
    return (
        <div>
            <header>
                <img src={under_construction} alt='Banner gif that says Under Construction'/>
            </header>

            <nav>
                <ul className='nav-items'>
                    <li>About</li>
                    <li>Lies</li>
                    <li>Promises</li>
                </ul>
            </nav>
        </div>
    )
}