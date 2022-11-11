import React, { createContext, useState } from 'react'

export const Context = createContext()

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(false)

  const onChangeTheme = () => setTheme(!theme)
  return (
    <Context.Provider value={{ theme, onChangeTheme }}>
      {children}
    </Context.Provider>
  )
}
