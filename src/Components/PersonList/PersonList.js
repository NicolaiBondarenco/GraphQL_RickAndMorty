import React, { useRef } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PERSONS } from '../../GraphQL/ApolloPersons'
import PersonItem from '../PersonItem/PersonItem'
import Prev from '../Prev/Prev'
import Next from '../Next/Next'
import './PersonList.css'

const PersonList = () => {
  const { error, loading, data } = useQuery(GET_PERSONS)
  const countMove = useRef(0)
  const listRef = useRef()
  const sliderMove = useRef()
  console.log(data?.characters.results.length)

  const handlerNext = () => {
    const lengthLine =
      data.characters.results.length * 315 - listRef.current.offsetWidth
    if (countMove.current >= lengthLine) return
    const widthListRef = listRef.current.offsetWidth
    countMove.current += widthListRef + 15
    sliderMove.current.style = `transform: translate(-${countMove.current}px)`
  }

  const handlerPrev = () => {
    if (countMove.current == 0) return
    const widthListRef = listRef.current.offsetWidth
    countMove.current -= widthListRef + 15
    sliderMove.current.style = `transform: translate(-${countMove.current}px)`
    console.log(countMove.current)
  }

  if (error) return <p className="text-center">Something went wrong!</p>
  if (loading) return <p className="text-center">Loading...</p>

  return (
    <div className="person-slider">
      <Prev handlerPrev={handlerPrev} />
      <div className="person-pop" ref={listRef}>
        <div className="person-wrapper" ref={sliderMove}>
          {data.characters.results.map((el) => (
            <PersonItem key={el.id} {...el} />
          ))}
        </div>
      </div>
      <Next handlerNext={handlerNext} />
    </div>
  )
}

export default PersonList
