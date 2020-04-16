import React, { useState, useEffect } from 'react'
import Joke from './Joke'

function RandomJoke() {
    const [joke, setJoke] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    async function getJoke() {
        let response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
        let data = await response.json()
        return data;
    }

    useEffect(() => {
        setLoading(true);
        getJoke()
            .then(data => {
                setJoke(data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setError(true);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            {isLoading && <p>Loading ....</p>}
            {!hasError && <Joke joke={joke} />}
        </div>
    )
}

export default RandomJoke