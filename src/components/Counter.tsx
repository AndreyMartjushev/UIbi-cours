import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div className={classes.test}>
            count: {count}
            <button onClick={increment}>add count</button>
        </div>
    );
};

export default Counter;