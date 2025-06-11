import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import './ImageGallery.css';

export class ImageGallery extends Component {
  // Метод для рендеринга списка изображений
  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul className="gallery">
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    );
  }
} 