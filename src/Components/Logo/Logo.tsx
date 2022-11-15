import React from 'react'
import './Logo.css'

const Logo: React.FC = () => {
  return (
    <div className="Logo">
      <div className="Logo__wrapper">
        <a href="/">
          <img
            className="Logo__image"
            src="https://avatars.mds.yandex.net/i?id=797deb660683e496b84693ec482f7d02-5265720-images-thumbs&n=13"
            alt="avatar"
          />
        </a>
      </div>
    </div>
  )
}

export default Logo
