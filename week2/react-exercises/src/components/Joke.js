import React from 'react'

function Joke(props) {
    return (
        <div>
            <p>{props.joke.setup}</p>
            <p>{props.joke.punchline}</p>
        </div>
    )
}

export default Joke
