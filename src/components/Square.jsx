import React from 'react';
import propTypes from 'prop-types';

export default function Board({ value, onSquareClick }) {
  return (
    <button 
      className="square" 
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

Board.propTypes = {
  value: propTypes.any,
  onSquareClick: propTypes.any,
};
