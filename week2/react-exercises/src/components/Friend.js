import React, { useState, useEffect } from 'react'
import FriendButton from './FriendButton'
import FriendProfile from './FriendProfile'

function Friend() {
    const [friend, setFriend] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    const getFriend = () => {
        setLoading(true);
        fetch('https://www.randomuser.me/api?results=1')
            .then(res => res.json()
            )
            .then(data => {
                setFriend(data.results[0]);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setError(true);
                setLoading(false);
            })
    }

    useEffect(() => {
        setLoading(true);
        getFriend()
    }, [])

    return (
        <div>
            {isLoading && <p>Loading ....</p>}
            {!hasError && <FriendProfile infos={friend} />}
            {hasError && <p>Something went wrong</p>}
            <FriendButton handleClick={(getFriend)} />
        </div>
    )
}

export default Friend
