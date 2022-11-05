import React from 'react'
import './Prev.css'

const Prev = ({ handlerPrev }) => {
  return (
    <button className="prev">
      <span
        className="material-symbols-outlined"
        onClick={() => handlerPrev('Prev')}
      >
        arrow_back_ios
      </span>
    </button>
  )
}

export default Prev
