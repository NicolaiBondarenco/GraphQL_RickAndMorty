import React from 'react'
import './PersonItem.css'

type PersonItemProps = {
  image: string
  id: number
  name: string
}

const PersonItem: React.FC<PersonItemProps> = (props) => {
  const { image, id, name } = props

  return (
    <div className="PersonItem">
      <img src={image} key={id} alt={name} />
      <p className="text-center">{name}</p>
    </div>
  )
}

export default PersonItem
