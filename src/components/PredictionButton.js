import React, {useState, setState} from 'react'

import PredictionZone from './PredictionZone';

export default function PredictionButton() {

    let [pred, setPred] = useState('yes');

    function handleClick() {
        setPred(<PredictionZone/>)
    }
    return (
        <>
            <button
                className='button--new-prediction'
                onClick={handleClick}
            >
                Generate Prediction!
            </button>
            <h1>{pred}</h1>
        </>
    )
}