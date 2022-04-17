import React, {useState} from 'react';

import trumpet from '../gifs/trumpet.gif'

export default function Promises() {
    const [cls, setCls] = useState('form--button');
    function handleClick() {
        setCls((cls) => (cls === "red" ? "green" : "red"));

    }
    return (
        <main>
            <form>
                {/* <button onClick={handleClick} className='form--button'>Button</button> */}
                {/* <button onClick={handleClick} className='form--button'><img src={trumpet} alt=''/></button> */}

                {/*  */}
                <style>{`
                    .red {color: red}
                    .green {color: green}
                `}</style>
                <button
                    className={cls}
                    onMouseEnter={handleClick}
                >
                    Button
                </button>
                {/*  */}

            </form>
        </main>
    )
}