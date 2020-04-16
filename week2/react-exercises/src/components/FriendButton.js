import React from 'react'

export default function FriendButton({ handleClick }) {
    return (
        <div>
            <button onClick={handleClick}>Get a friend</button>
        </div>
    )
}
