import React from 'react'
import './App.css'

import PersonList from '../PersonList/PersonList'
import Logo from '../Logo/Logo'
import Theme from '../Theme/Theme'

const App: React.FC = () => {
  return (
    <div className="app">
      <Theme />
      <Logo />
      <PersonList />
    </div>
  )
}

export default App
