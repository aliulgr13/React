import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = () => {
    const [count, setCount] = useState(0);

    let feedback = count > 10 ? `It's higher than 10!` : "Keep counting...";
    return (
        <div>
            <p>{feedback}</p>
            <Count count={count} />
            <Button Countup={() => setCount(count + 1)} />
        </div>
    );
};

export default Counter;