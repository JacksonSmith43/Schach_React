import { useState } from 'react';
import './App.css';
import { Chessboard } from 'react-chessboard';

export default function Game() {
  return (

    <div className="board">
      <Board />
    
    </div>
  );
}

function Board() {

  const getInitialBoard = () => {
    const board = Array(64).fill(null);

    board[0] = 'images/tower_black.png';
    board[1] = 'images/knight_black.png';
    board[2] = 'images/laufer_black.png';
    board[3] = 'images/queen_black.png';
    board[4] = 'images/king_black.png';
    board[5] = 'images/laufer_black.png';
    board[6] = 'images/knight_black.png';
    board[7] = 'images/tower_black.png';

    board[8] = 'images/pawn_black.png';
    board[9] = 'images/pawn_black.png';
    board[10] = 'images/pawn_black.png';
    board[11] = 'images/pawn_black.png';
    board[12] = 'images/pawn_black.png';
    board[13] = 'images/pawn_black.png';
    board[14] = 'images/pawn_black.png';
    board[15] = 'images/pawn_black.png';

    board[48] = 'images/pawn_white.png';
    board[49] = 'images/pawn_white.png';
    board[50] = 'images/pawn_white.png';
    board[51] = 'images/pawn_white.png';
    board[52] = 'images/pawn_white.png';
    board[53] = 'images/pawn_white.png';
    board[54] = 'images/pawn_white.png';
    board[55] = 'images/pawn_white.png';

    board[56] = 'images/tower_white.png';
    board[57] = 'images/knight_white.png';
    board[58] = 'images/laufer_white.png';
    board[59] = 'images/queen_white.png';
    board[60] = 'images/king_white.png';
    board[61] = 'images/laufer_white.png';
    board[62] = 'images/knight_white.png';
    board[63] = 'images/tower_white.png';

    return board;
  }



  const [squares, setSquares] = useState(getInitialBoard());
  const [fromIndex, setFromIndex] = useState(null);

  const resetGame = () => {
    setSquares(getInitialBoard());
  }

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

      <button onClick={resetGame} className='btn btn-primary' id='resets-game'>Reset game</button>

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




