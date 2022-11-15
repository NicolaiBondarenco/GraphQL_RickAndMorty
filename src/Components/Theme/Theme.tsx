import { useContext } from 'react'
import { Context, ThemeContextProps } from '../../Context/ThemeContext'
import './Theme.css'

const Theme = () => {
  const { onChangeTheme, theme } = useContext<ThemeContextProps>(Context)
  const findBody = document.querySelector('body') as HTMLElement

  if (!theme) {
    findBody.style.backgroundColor = '#e2e3cb'
  } else {
    findBody.style.backgroundColor = '#1e476b'
  }

  return (
    <button className="theme" onClick={() => onChangeTheme(!theme)}>
      Theme
      {theme ? (
        <span className="material-symbols-outlined">light_mode</span>
      ) : (
        <span className="material-symbols-outlined">dark_mode</span>
      )}
    </button>
  )
}

export default Theme
