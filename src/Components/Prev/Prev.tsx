import './Prev.css'

type PrevProps = {
  handlerPrev: () => void
}

const Prev: React.FC<PrevProps> = ({ handlerPrev }) => {
  return (
    <button className="prev">
      <span className="material-symbols-outlined" onClick={() => handlerPrev()}>
        arrow_back_ios
      </span>
    </button>
  )
}

export default Prev
