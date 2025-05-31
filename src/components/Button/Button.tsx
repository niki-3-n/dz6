import React from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false }) => {
  return (
    <button
      type="button"
      className="Button"
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
};

export default Button; 