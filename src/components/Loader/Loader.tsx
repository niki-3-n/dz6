import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="Loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader; 