import React from 'react'
import './App.css'
import PersonList from '../PersonList/PersonList'
import Logo from '../Logo/Logo'

const App = () => {
  return (
    <div className="app">
      <Logo />
      <PersonList />
    </div>
  )
}

export default App
