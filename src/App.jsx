import { Component } from 'react'
import axios from 'axios'
import { Searchbar } from './components/Searchbar'
import { ImageGallery } from './components/ImageGallery'
import { Button } from './components/Button'
import { Loader } from './components/Loader'
import { Modal } from './components/Modal'
import './App.css'

const API_KEY = '50726677-c3a3868cdb863e7d831aff00a'
const BASE_URL = 'https://pixabay.com/api/'

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    query: '',
    showModal: false,
    selectedImage: null,
  }

  fetchImages = async (searchQuery, pageNum) => {
    try {
      this.setState({ loading: true, error: null })
      
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
      
      this.setState(prevState => ({
        images: pageNum === 1 ? newImages : [...prevState.images, ...newImages],
        loading: false,
      }))
    } catch (err) {
      this.setState({
        error: 'Ошибка при загрузке изображений',
        loading: false,
      })
      console.error('Ошибка:', err)
    }
  }

  handleSearch = (searchQuery) => {
    this.setState({ query: searchQuery, page: 1 })
    this.fetchImages(searchQuery, 1)
  }

  handleLoadMore = () => {
    const { query, page } = this.state
    const nextPage = page + 1
    this.setState({ page: nextPage })
    this.fetchImages(query, nextPage)
  }

  handleImageClick = (largeImageURL) => {
    this.setState({
      selectedImage: largeImageURL,
      showModal: true,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
    })
  }

  render() {
    const { images, loading, error, showModal, selectedImage } = this.state

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearch} />
        
        {error && <p className="error">{error}</p>}
        
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onImageClick={this.handleImageClick}
          />
        )}
        
        {loading && <Loader />}
        
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        
        {showModal && (
          <Modal
            largeImageURL={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    )
  }
}

export default App
