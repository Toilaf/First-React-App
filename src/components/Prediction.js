import react from 'react'

export default function Prediction({dangerLevel, maxLevel, content, imgSrc, imgAlt}) {
    return <>
            <h1 className='danger-level'>Danger Level: {dangerLevel}/{maxLevel}</h1>
            {content}
            <img src={imgSrc} alt={imgAlt} className='main-img'/>
        </>
}