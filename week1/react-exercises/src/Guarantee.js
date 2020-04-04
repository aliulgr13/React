import React from 'react';

function Guarantee({ img, title, description }) {

    return (
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <img src={img} alt={''} />
        </div>

    )
}

export default Guarantee;
