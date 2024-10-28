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
  const initialBoard = Array(64).fill(null);

  initialBoard[0] = 'images/tower_black.png';
  initialBoard[1] = 'images/knight_black.png';
  initialBoard[2] = 'images/laufer_black.png';
  initialBoard[3] = 'images/queen_black.png';
  initialBoard[4] = 'images/king_black.png';
  initialBoard[5] = 'images/laufer_black.png';
  initialBoard[6] = 'images/knight_black.png';
  initialBoard[7] = 'images/tower_black.png';

  initialBoard[8] = 'images/pawn_black.png';
  initialBoard[9] = 'images/pawn_black.png';
  initialBoard[10] = 'images/pawn_black.png';
  initialBoard[11] = 'images/pawn_black.png';
  initialBoard[12] = 'images/pawn_black.png';
  initialBoard[13] = 'images/pawn_black.png';
  initialBoard[14] = 'images/pawn_black.png';
  initialBoard[15] = 'images/pawn_black.png';

  initialBoard[48] = 'images/pawn_white.png';
  initialBoard[49] = 'images/pawn_white.png';
  initialBoard[50] = 'images/pawn_white.png';
  initialBoard[51] = 'images/pawn_white.png';
  initialBoard[52] = 'images/pawn_white.png';
  initialBoard[53] = 'images/pawn_white.png';
  initialBoard[54] = 'images/pawn_white.png';
  initialBoard[55] = 'images/pawn_white.png';

  initialBoard[56] = 'images/tower_white.png';
  initialBoard[57] = 'images/knight_white.png';
  initialBoard[58] = 'images/laufer_white.png';
  initialBoard[59] = 'images/queen_white.png';
  initialBoard[60] = 'images/king_white.png';
  initialBoard[61] = 'images/laufer_white.png';
  initialBoard[62] = 'images/knight_white.png';
  initialBoard[63] = 'images/tower_white.png';



  const [squares, setSquares] = useState(initialBoard);
  const [fromIndex, setFromIndex] = useState(null);

  const handleDragStart = (index) => { // Saves the index of the current picked figure. 
    setFromIndex(index);
  };

  const handleDrop = (toIndex) => { // Moves the figure to the new field and empties the previous field. 
    if ((fromIndex !== null) && (fromIndex !== toIndex)) {
      const updatedSquares = [...squares];
      updatedSquares[toIndex] = updatedSquares[fromIndex]; // Figur zum Ziel verschieben
      updatedSquares[fromIndex] = null; // Empties the previous field. 
      setSquares(updatedSquares); // Updates the condition. 

      setFromIndex(null); // Resets the previous field. 
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allows drop events. 
  };

  return (
    <div className="chessboard">
      {squares.map((image, index) => (
        <Square
          key={index}
          image={image}
          index={index}
          handleDragStart={() => handleDragStart(index)}
          handleDrop={() => handleDrop(index)}
          handleDragOver={handleDragOver}
        />
      ))}
    </div>
  );
}

function Square({ image, handleDragStart, handleDrop, handleDragOver }) {
  return (
    <div
      className="square"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {image && (
        <img
          src={image}
          alt="chess piece"
          draggable
          onDragStart={handleDragStart}
        />
      )}
    </div>
  );
}
