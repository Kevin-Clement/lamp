import React from 'react';
import Controls from '../controls/Controls';
import './MetaData.scss';

const data = {
    1: {
        material: 'Cooper',
        dimensions:'H 33 x W 15 x D 15',
        weight: '2,5 kg',
        electrification: 'LED 10W | G9 |  220-240V | 50 Hz' 
    },
    2: {
        material: 'Metal',
        dimensions:'H 45 x W 12 x D 12',
        weight: '2,4 kg',
        electrification: 'LED 10W | G9 |  220-240V | 50 Hz'
    },
    3: {
        material: 'Regular',
        dimensions:'H 70 x W 18 x D 18',
        weight: '4,5 kg',
        electrification: 'LED 10W | G9 |  220-240V | 50 Hz'
    },
} 


const MetaData = ({step}) => {

    const {material, dimensions, weight, electrification} = data[step];

    return (
        <>
        <div className='metaData'>
            <div className='metaData-list'>
                <ul>
                    <li><strong>Material:</strong> {material}</li>
                    <li><strong>Dimension (cm):</strong> {dimensions}</li>
                    <li><strong>Net Weight:</strong> {weight}</li>
                    <li><strong>Electrification:</strong> {electrification}</li>
                </ul>
            </div>
            <img className='metaData-img' src={`./assets/Lamp-${step}.png`}></img>
            <Controls/>
        </div>
        </>
    );
};

export default MetaData;