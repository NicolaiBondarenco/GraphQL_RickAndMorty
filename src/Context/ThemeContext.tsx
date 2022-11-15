import React, { createContext, useState } from 'react'

export type ThemeContextProps = {
  theme: Boolean
  onChangeTheme: (theme: Boolean) => void
}

export const Context = createContext<ThemeContextProps>({
  theme: false,
  onChangeTheme: () => {},
})

export const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Boolean>(false)

  const onChangeTheme = () => setTheme(!theme)
  return (
    <Context.Provider value={{ theme, onChangeTheme }}>
      {children}
    </Context.Provider>
  )
}
