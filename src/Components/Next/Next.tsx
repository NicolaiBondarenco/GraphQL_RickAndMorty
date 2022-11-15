import React from 'react'
import './Next.css'

type PropsType = {
  handlerNext: () => void
}

const Next: React.FC<PropsType> = ({ handlerNext }) => {
  return (
    <button className="next">
      <span className="material-symbols-outlined" onClick={() => handlerNext()}>
        arrow_forward_ios
      </span>
    </button>
  )
}

export default Next
