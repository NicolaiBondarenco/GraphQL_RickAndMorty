import React from 'react'
import './Pagination.css'

const Pagination = ({ amountList, numPoints }) => {
  let points = []

  for (let i = 1; i <= amountList; i++) {
    points.push(i)
  }

  const pointsItems = points.map((el) => {
    return (
      <li
        className={`${
          numPoints === el ? 'pagination__item-active' : 'pagination__item'
        }`}
        key={el}
      ></li>
    )
  })

  return <ul className="pagination"> {pointsItems} </ul>
}

export default Pagination
