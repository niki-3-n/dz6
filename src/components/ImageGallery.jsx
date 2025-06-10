import { ImageGalleryItem } from './ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
}; 