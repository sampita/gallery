import React, { useEffect, useState } from "react"
import apiHelpers from "../../modules/apiHelpers"
import Modal from "../Modal/Modal"
import './Gallery.css'

const Gallery = () => {

    const [photos, setPhotos] = useState([])
    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    // on initial load, run the function to grab all photos and filter down to only the data we need (id, imageURL, description)
    useEffect(() => {
        apiHelpers.getAll("photos")
            .then((response) => {
                const imageURLs = response.map((obj) => getPhotoURL(obj))
                setPhotos(imageURLs)
            })
    }, [])

    const getPhotoURL = (obj) => {
        return {
            id: obj.id,
            smallImg: obj.urls.small,
            fullImg: obj.urls.regular,
            description: obj.description,
            thumbnail: obj.urls.thum
        }
    }

    const onOpen = (photo) => {
        setSelectedPhoto(photo)
        setIsOpen(true)
    }

    const onClose = () => setIsOpen(false)

    return (
        <div className="root">
                <picture className="gallery-container">
                    {photos.map((photo) => {
                        return (
                            <div key={photo.id} className="photo-container">
                                <img src={photo.smallImg} alt={photo.description} className="small-photo" onClick={() => onOpen(photo)} />
                            </div>
                        )
                    })}
                </picture>
            <Modal open={isOpen} onClose={() => onClose(false)}>
                <img src={selectedPhoto?.fullImg} alt={selectedPhoto?.description} className="large-photo" />
            </Modal>
        </div>
    )
}

export default Gallery;