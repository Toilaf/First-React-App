import React, {useState, setState} from 'react'

import PredictionZone from './PredictionZone';

export default function PredictionButton({handleClick}) {
    return (
        <>
            <button
                className='button--new-prediction'
                onClick={handleClick}
            >
                Generate Prediction!
            </button>
        </>
    )
}