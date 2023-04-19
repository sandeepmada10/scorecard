import React from 'react';

export default function Buttons({ ScoreChange }) {


    return (
        <div>
            <button onClick={() => ScoreChange(1)}>1</button>
            <button onClick={() => ScoreChange(2)}>2</button>
            <button onClick={() => ScoreChange(3)}>3</button>
            <button onClick={() => ScoreChange(4)}>4</button>
            <button onClick={() => ScoreChange(6)}>6</button>
        </div>
    )
}
