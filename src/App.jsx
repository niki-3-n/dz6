import { useState } from 'react'
import axios from 'axios'
import { Searchbar } from './components/Searchbar'
import { ImageGallery } from './components/ImageGallery'
import { Button } from './components/Button'
import { Loader } from './components/Loader'
import { Modal } from './components/Modal'
import './App.css'

const API_KEY = '50726677-c3a3868cdb863e7d831aff00a'
const BASE_URL = 'https://pixabay.com/api/'

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [hasMore, setHasMore] = useState(true)

  const fetchImages = async (searchQuery, pageNum) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: searchQuery,
          page: pageNum,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      })

      const newImages = response.data.hits
      setHasMore(newImages.length === 12)
      
      if (pageNum === 1) {
        setImages(newImages)
      } else {
        setImages(prevImages => [...prevImages, ...newImages])
      }
    } catch (err) {
      setError('Failed to fetch images. Please try again.')
      console.error('Error fetching images:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
    setPage(1)
    fetchImages(searchQuery, 1)
  }

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchImages(query, nextPage)
  }

  const handleImageClick = (largeImageURL) => {
    setSelectedImage(largeImageURL)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedImage(null)
  }

  return (
    <div className="app">
      <Searchbar onSubmit={handleSearch} />
      
      {error && <p className="error">{error}</p>}
      
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onImageClick={handleImageClick}
        />
      )}
      
      {loading && <Loader />}
      
      {images.length > 0 && hasMore && !loading && (
        <Button onClick={handleLoadMore} />
      )}
      
      {showModal && (
        <Modal
          largeImageURL={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default App
