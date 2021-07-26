import React from "react";
import Board from "./components/Board";
import "./styles/root.scss"
import { useState } from 'react'
import { calculateWinner } from "./helper";
const App = () => {
  const [board ,setboard] =  useState(Array(9).fill(null));
    const [isXNext , setIsXNext] = useState(false);

    const winner = calculateWinner(board);
    const message = winner? `winner is ${winner}`: `Next player is ${isXNext?'X':'O'}`;

    const handleSquaredClick = (position)=> {

        if(board[position] || winner)
        {
            return ;
        }
        setboard((prev) => {
            return prev.map((square,pos) => {
                if(pos === position)
                {
                    return isXNext?"X":"O";
                }
                return square ;
            });
        });
        setIsXNext((prev) => !prev);
    };
    
  return(
     
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{ message }</h2>
      <Board board={board} handleSquaredClick={handleSquaredClick} />
    </div>
      
    
  );
};

export default App;

