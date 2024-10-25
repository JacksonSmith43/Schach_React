import { useState } from 'react';
import './App.css';

export default function Game() {
  return (
    <div className="board">
      <Board />
    </div>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(64).fill(null));
  const initialPieces = {
    0: "images/tower_black.png",
    1: "images/knight_black.png",
    2: "images/laufer_black.png",
    3: "images/queen_black.png",
    4: "images/king_black.png",
    5: "images/laufer_black.png",
    6: "images/knight_black.png",
    7: "images/tower_black.png",
    8: "images/pawn_black.png",
    9: "images/pawn_black.png",
    10: "images/pawn_black.png",
    11: "images/pawn_black.png",
    12: "images/pawn_black.png",
    13: "images/pawn_black.png",
    14: "images/pawn_black.png",
    15: "images/pawn_black.png",
    48: "images/pawn_white.png",
    49: "images/pawn_white.png",
    50: "images/pawn_white.png",
    51: "images/pawn_white.png",
    52: "images/pawn_white.png",
    53: "images/pawn_white.png",
    54: "images/pawn_white.png",
    55: "images/pawn_white.png",
    56: "images/tower_white.png",
    57: "images/knight_white.png",
    58: "images/laufer_white.png",
    59: "images/queen_white.png",
    60: "images/king_white.png",
    61: "images/laufer_white.png",
    62: "images/knight_white.png",
    63: "images/tower_white.png",
  };


  Object.keys(initialPieces).forEach((key) => (squares[key] = initialPieces[key]));

  const movePiece = (fromIndex, toIndex) => {
    const newSquares = [...squares];
    newSquares[toIndex] = newSquares[fromIndex];
    newSquares[fromIndex] = null;
    setSquares(newSquares);
  };

  return (
    <div className="chessboard">
      {squares.map((image, index) => (
        <Square
          key={index}
          index={index}
          image={image}
          movePiece={movePiece}
        />
      ))}
    </div>
  );
}

function Square({ index, image, movePiece }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("fromIndex", index);
  };

  const handleDrop = (e) => {
    const fromIndex = e.dataTransfer.getData("fromIndex");
    movePiece(fromIndex, index);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="square"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        // backgroundColor: (index % 2 === 0) ? 'white' : 'gray',
      }}
    >
      {image && (
        <img
          className="chess-piece"
          src={image}
          alt="piece"
          draggable
          onDragStart={handleDragStart}
        />
      )}
    </div >
  );
}