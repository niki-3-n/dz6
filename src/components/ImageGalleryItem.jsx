import { Component } from 'react';
import './ImageGalleryItem.css';

export class ImageGalleryItem extends Component {
  // Обработчик клика по изображению
  handleClick = () => {
    const { largeImageURL, onImageClick } = this.props;
    onImageClick(largeImageURL);
  };

  render() {
    const { webformatURL } = this.props;

    return (
      <li className="gallery-item" onClick={this.handleClick}>
        <img src={webformatURL} alt="" className="gallery-item-image" />
      </li>
    );
  }
} 