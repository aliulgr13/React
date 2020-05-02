import React from 'react'


function Cities({ citiesArr }) {
    return (
        <>
            {
                citiesArr.map((city, index) => (
                    <CityCard city={city} key={index} />
                ))
            }
        </>
    )
}

export default Cities
