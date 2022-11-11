import React, { useRef, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PERSONS } from '../../GraphQL/ApolloPersons'
import PersonItem from '../PersonItem/PersonItem'
import Prev from '../Prev/Prev'
import Next from '../Next/Next'
import Skeleton from '../Skeleton/Skeleton'
import Pagination from '../Pagination/Pagination'
import './PersonList.css'

const PersonList = () => {
  const { error, loading, data } = useQuery(GET_PERSONS)
  const countMove = useRef(0)
  const listRef = useRef()
  const sliderMove = useRef()
  const [numPoints, setNumPoints] = useState(1)

  const amountList = Math.ceil(data?.characters.results.length / 3)

  const handlerNext = () => {
    const lengthLine =
      data.characters.results.length * 315 - listRef.current.offsetWidth
    if (countMove.current >= lengthLine) return
    const widthListRef = listRef.current.offsetWidth
    countMove.current += widthListRef + 15
    sliderMove.current.style = `transform: translate(-${countMove.current}px)`
    if (numPoints <= amountList) setNumPoints((prev) => prev + 1)
  }

  const handlerPrev = () => {
    if (countMove.current == 0) return
    const widthListRef = listRef.current.offsetWidth
    countMove.current -= widthListRef + 15
    sliderMove.current.style = `transform: translate(-${countMove.current}px)`
    console.log(countMove.current)
    if (numPoints <= amountList) setNumPoints((prev) => prev - 1)
  }

  if (error) return <p className="text-center">Something went wrong!</p>

  return (
    <div className="person-slider">
      <Prev handlerPrev={handlerPrev} />
      <div className="person-pop" ref={listRef}>
        <div className="person-wrapper" ref={sliderMove}>
          {loading
            ? [...new Array(3)].map((_, id) => {
                return <Skeleton key={id} />
              })
            : data.characters.results.map((el) => (
                <PersonItem key={el.id} {...el} />
              ))}
        </div>
      </div>
      <Next handlerNext={handlerNext} />
      <Pagination amountList={amountList} numPoints={numPoints} />
    </div>
  )
}

export default PersonList
