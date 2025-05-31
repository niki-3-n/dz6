import React, { useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  largeImageURL: string;
  tags: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal; 