import React, { useState } from 'react'
import DogButton from './DogButton';
import DogPhoto from './DogPhoto'


export default function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    const getDogPhoto = () => {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                //which one is true to make it push new element into an array
                //setDogPhotos([...dogPhotos, data.message]);
                setDogPhotos(dogPhotos => [...dogPhotos, data.message]);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setError(true);
                setLoading(false);
            })
    }

    return (
        <div>
            {isLoading && <p>Loading ....</p>}
            {dogPhotos.length !== '0' && <p>{"Get your first dog by clicking the button!"}</p>}
            {!hasError && dogPhotos.map((dogPhoto, index) => (
                <DogPhoto key={index} dogPhoto={dogPhoto} />
            ))}
            {hasError && <p>Something went wrong</p>}
            <DogButton onClickFunc={getDogPhoto} />
        </div>
    )
}
