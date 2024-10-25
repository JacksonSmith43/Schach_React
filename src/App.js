import './App.css';

export default function Game() {
  return (
    <div className="board">
      <Board />
    </div>
  );
}


function Board() {

  return (
    <>
      <div className='board-row'>
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
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )

}

function Square() {
  return <button className="square" ></button>

}

