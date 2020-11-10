import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHooks = () => {

    const {state, increment, reset, decrement} = useCounter();
    return (
        <div>
            <h1>Counter with Hook: { state } </h1>
            <hr/>

            <button className="btn" onClick={ increment }> +1 </button>
            <button className="btn" onClick={ reset }> reset </button>
            <button className="btn" onClick={ decrement }> -1 </button>

        </div>
    )
}
