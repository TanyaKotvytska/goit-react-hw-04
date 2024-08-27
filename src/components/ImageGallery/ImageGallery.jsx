import React, { useState } from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import Modal from 'react-modal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

export default function ImageGallery({ images, loading, error, onLoadMore }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            {loading && <Loader />}
            {error && <ErrorMessage />}
            <ul className={css.gallery}>
                {images.map((image) => (
                    <li key={image.id} className={css.imageItem}>
                        <ImageCard image={image} onClick={() => handleImageClick(image)} />
                    </li>
                ))}
            </ul>
            {images.length > 0 && <LoadMoreBtn onLoadMore={onLoadMore} />}
            {selectedImage && (
                <Modal
                    isOpen={!!selectedImage}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                >
                    <div>
                        <button onClick={closeModal}>Close</button>
                        <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
                        <p><strong>Photographer:</strong> {selectedImage.user.name}</p>
                        <p><strong>Likes:</strong> {selectedImage.likes}</p>
                        <p><strong>Description:</strong> {selectedImage.description || 'No description'}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}
