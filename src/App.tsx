import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import './App.css';

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(BASE_URL, {
          params: {
            key: API_KEY,
            q: query,
            page,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
          },
        });

        if (page === 1) {
          setImages(response.data.hits);
        } else {
          setImages((prevImages) => [...prevImages, ...response.data.hits]);
        }
      } catch (err) {
        setError('Failed to fetch images. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (largeImageURL: string) => {
    const image = images.find((img) => img.largeImageURL === largeImageURL);
    if (image) {
      setSelectedImage(image);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      
      {error && <p className="error">{error}</p>}
      
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      
      {loading && <Loader />}
      
      {images.length > 0 && !loading && (
        <Button onClick={handleLoadMore} />
      )}
      
      {showModal && selectedImage && (
        <Modal
          largeImageURL={selectedImage.largeImageURL}
          tags={selectedImage.tags}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
