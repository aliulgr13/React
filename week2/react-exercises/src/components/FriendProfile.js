import React from 'react'


function FriendProfile({ infos }) {

    return (
        <div>
            <ul>
                <li>{infos.name ? `${infos.name.first} ${infos.name.last}` : null}</li>
                <li>{infos.location && `${infos.location.street.name}-${infos.location.city}`}</li>
                <li>{infos.location && `${infos.location.country}`}</li>
                <li>{infos.email}</li>
                <li>{infos.cell}</li>
            </ul>
        </div>
    )
}

export default FriendProfile
