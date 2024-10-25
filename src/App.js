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

  const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>

      <div className='black-team'>
        <p>White Pieces taken:</p>

        <div className='board-row'>
          <p className="chess-numbers">8</p>
          <Square value={squares[0]} image="images/tower_black.png" />
          <Square value={squares[1]} image="images/knight_black.png" />
          <Square value={squares[2]} image="images/laufer_black.png" />
          <Square value={squares[0]} image="images/queen_black.png" />
          <Square value={squares[0]} image="images/king_black.png" />
          <Square value={squares[5]} image="images/laufer_black.png" />
          <Square value={squares[6]} image="images/knight_black.png" />
          <Square value={squares[7]} image="images/tower_black.png" />
        </div>

        <div className='board-row'>
          <p className="chess-numbers">7</p>
          <Square value={squares[0]} image="images/pawn_black.png" />
          <Square value={squares[0]} image="images/pawn_black.png" />
          <Square value={squares[0]} image="images/pawn_black.png" />
          <Square value={squares[0]} image="images/pawn_black.png" />
          <Square value={squares[0]} image="images/pawn_black.png" />
          <Square value={squares[0]} image="images/pawn_black.png" />
          <Square value={squares[0]} image="images/pawn_black.png" />
          <Square value={squares[0]} image="images/pawn_black.png" />
        </div>
      </div>

      <div className='board-row'>
        <p className="chess-numbers">6</p>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>

      <div className='board-row'>
        <p className="chess-numbers">5</p>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>

      <div className='board-row'>
        <p className="chess-numbers">4</p>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>

      <div className='board-row'>
        <p className="chess-numbers">3</p>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>

      <div className='black-team'>
        <div className='board-row'>
          <p className="chess-numbers">2</p>
          <Square value={squares[0]} image="images/pawn_white.png" />
          <Square value={squares[0]} image="images/pawn_white.png" />
          <Square value={squares[0]} image="images/pawn_white.png" />
          <Square value={squares[0]} image="images/pawn_white.png" />
          <Square value={squares[0]} image="images/pawn_white.png" />
          <Square value={squares[0]} image="images/pawn_white.png" />
          <Square value={squares[0]} image="images/pawn_white.png" />
          <Square value={squares[0]} image="images/pawn_white.png" />
        </div>

        <div className='board-row'>
          <p className="chess-numbers">1</p>
          <Square value={squares[2]} image="images/tower_white.png" />
          <Square value={squares[3]} image="images/knight_white.png" />
          <Square value={squares[4]} image="images/laufer_white.png" />
          <Square value={squares[5]} image="images/queen_white.png" />
          <Square value={squares[6]} image="images/king_white.png" />
          <Square value={squares[3]} image="images/laufer_white.png" />
          <Square value={squares[6]} image="images/knight_white.png" />
          <Square value={squares[7]} image="images/tower_white.png" />
        </div>

        <div className="chess-letters">
          <span className='a'>A</span>
          <span className='b'>B</span>
          <span className='c'>C</span>
          <span className='d'>D</span>
          <span className='e'>E</span>
          <span className='f'>F</span>
          <span className='g'>G</span>
          <span className='h'>H</span>

        </div>

        <p>Black Pieces taken:</p>
      </div>

    </>
  )
}

function Square({ value, image }) {
  return (
    <button className="square">
      {value}
      {image && <img src={image} alt="King." />}
    </button>
  );
}


function StartPosition() {
  //  return <button className="square" ></button>

}

function Characters() {
  // const king_black = "images/king_black.png";

}