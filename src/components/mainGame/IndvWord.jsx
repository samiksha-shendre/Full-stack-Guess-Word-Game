import React from 'react'
import "../../mainGame.css";

function IndvWord({val, onClick}) {
  return (
    <button onClick={() => onClick(val)} className="key">{val}</button>
  )
}

export default IndvWord
