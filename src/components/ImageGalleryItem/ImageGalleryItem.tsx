import React from 'react';
import './ImageGalleryItem.css';

interface ImageGalleryItemProps {
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  onClick: () => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={webformatURL} alt={tags} className="gallery-item-image" />
    </li>
  );
};

export default ImageGalleryItem; 