import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchImages } from "./images-api"
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from '../src/components/Loader/Loader';
import LoadMoreBtn from '../src/components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../src/components/ImageModal/ImageModal';
import ErrorMessage from '../src/components/ErrorMessage/ErrorMessage';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);  
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        console.log(data.results);
        setImages(prevImages => [...prevImages, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        setError(null);
      }
    };

    fetchData();
  }, [query, page]);

  
  const handleSearchSubmit = newQuery => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }

  const handleImageClick = image => {
    setSelectedImg(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onLoadMore={() => setPage(prevPage => prevPage + 1)} />}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={selectedImg} />
    </div>
  );
}