import React, { useState } from 'react'
import Buttons from '../Buttons';

export default function Team({ name }) {
    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [change, setChange] = useState('increment');

    const ScoreChange = (value) => {
        if (change === 'increment') {
            setRuns(prevruns => prevruns + value);
        }
        else if (change === 'decrement') {
            setRuns(prevruns => prevruns - value);
        }
        else {
            console.log('Error');
        }
    }

    return (
        <div className='team-a'>
            <span>{name}</span>
            <h3>Score: {runs} / {wickets}</h3>

            <input
                checked={change === 'increment'}
                value='inrement'
                type='radio'
                onChange={() => setChange('increment')} />increment
            <input
                checked={change === 'decrement'} type='radio'
                onChange={() => setChange('decrement')} />decrement

            <div>
                <Buttons ScoreChange={ScoreChange} />
            </div>
            <div className='wickets'>
                <span>Wickets</span>
                <button onClick={() => { setWickets(wickets + 1) }}>+</button>
                <button onClick={() => { setWickets(wickets - 1) }}>-</button>
            </div>

        </div>
    )
}
