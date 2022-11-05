import React from 'react'
import './PersonItem.css'

const PersonItem = (props) => {
  const { image, id, name } = props

  return (
    <div className="PersonItem">
      <img src={image} key={id} alt="Image" />
      <p className="text-center">{name}</p>
    </div>
  )
}

export default PersonItem
