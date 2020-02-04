import React, { useState } from 'react';

const getClassName = type => ({
  e: 'empty',
  s: 'snake',
  f: 'food',
}[type])

const Cell = ({ type }) => <div className={`cell ${getClassName(type)}`} />

// const initialSnake = [[0, 0], [0, 1], [0, 2]]

const field = [
  ["s","s","s","e","e","e","e","e","e","e"],
  ["e","e","e","e","e","e","e","e","e","e"],
  ["e","e","e","e","e","e","e","e","e","e"],
  ["e","e","e","e","e","e","e","e","e","e"],
  ["e","e","e","e","e","e","e","f","e","e"],
  ["e","e","e","e","e","e","e","e","e","e"],
  ["e","e","e","e","e","e","e","e","e","e"],
  ["e","e","e","e","e","e","e","e","e","e"],
  ["e","e","e","e","e","e","e","e","e","e"],
  ["e","e","e","e","e","e","e","e","e","e"],
]

function App() {
  const [state, setState] = useState({
    initialized: false,
  })

  const initialize = () => setState({ initialized: true })

  return (
    <div className="app">
      <div className="field">
        {state.initialized ? (
          field.map((row, x) => row.map((cell, y) => <Cell type={cell} key={`${x}${y}`} />))
        ) : (
          <input type="button" value="start" onClick={initialize}/>
        )}
      </div>
    </div>
  );
}

export default App;
