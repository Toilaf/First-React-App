import React from 'react'

export default function Header() {
    return (
        <div>
            <nav>
                <h1>SkullWatch</h1>
                <p>Your favorite place to get the latest forecast...</p>
                <ul className='nav-items'>
                    <li>About</li>
                    <li>Lies</li>
                    <li>Promises</li>
                </ul>
            </nav>
        </div>
    )
}