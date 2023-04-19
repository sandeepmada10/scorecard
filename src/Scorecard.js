import React from 'react';
import './index.css'
import Team from './Team/Team';

export default function Scorecard() {
    return (
        <div className='score'><h1>Scorecard</h1>
            <div className='scorecard'>
                <Team />
                <Team />
            </div>
        </div>
    )
}












