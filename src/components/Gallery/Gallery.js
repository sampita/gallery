import React, { useEffect, useState } from "react"
import apiHelpers from "../../modules/apiHelpers"
import './Gallery.css'

const Gallery = () => {

    // declare a new state variable of "photos" and set to an empty array
    const [photos, setPhotos] = useState([])

    // on initial load, run the function to grab all photos and filter down to only the data we need (id, imageURL, description)
    useEffect(() => {
        apiHelpers.getAll("photos")
            .then((response) => {
                const imageURLs = response.map((obj) => getPhotoURL(obj))
                setPhotos(imageURLs)
            })
    }, [])

    const getPhotoURL = (obj) => {
        return { id: obj.id, smallImg: obj.urls.small, fullImg: obj.urls.full, description: obj.description, thumbnail: obj.urls.thumb }
    }

    return (
        <>
            <picture className="gallery-container">
                {photos.map((photo) => {
                    return (
                        <div key={photo.id} className="photo-container">
                            <img src={photo.smallImg} alt={photo.description} className="photo"/>
                        </div>
                    )
                })}
            </picture>
        </>
    )
}

export default Gallery;