import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchImagesWithTopic } from "./images-api"
import ImageGallery from './components/ImageGallery/ImageGallery';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
	try {
	  setImages([]);
	  setError(false);
      setLoading(true);
      const data = await fetchImagesWithTopic(topic);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery />
    </>
  );
}
