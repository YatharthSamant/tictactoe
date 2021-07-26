import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` square ${isWinningSquare ? 'winnig': ''} ${value === 'X' ? 'text-green' : 'text-orange'}`}
      
    >
      {value}
    </button>
  );
};

export default Square;