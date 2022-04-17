import React from 'react'

import title from '../gifs/title.gif'

export default function Header() {
    return (
        <div>
            <header>
                <div className='title'>
                    <a href='index.html'><img src={title} alt='Skull Watch logo' /></a>
                    <p className='subtitle'>Your favorite place to get the latest forecast...</p>
                </div>
                <nav>
                    <ul className='nav-items'>
                        <li><a href='about.html' className='nav-links'>About</a></li>
                        <li><a href='lies.html' className='nav-links'>Lies</a></li>
                        <li><a href='promises.html' className='nav-links'>Promises</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}