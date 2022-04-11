import React from 'react'

import title from '../gifs/title.gif'

export default function Header() {
    return (
        <div>
            <header>
                <div className='title'>
                    <img src={title} alt='Skull Watch logo' />
                    <p className='subtitle'>Your favorite place to get the latest forecast...</p>
                </div>
                <nav>
                    <ul className='nav-items'>
                        <li>About</li>
                        <li>Lies</li>
                        <li>Promises</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}