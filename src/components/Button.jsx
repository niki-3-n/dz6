import './Button.css';

export const Button = ({ onClick, disabled }) => {
  return (
    <button className="load-more-button" onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
}; 