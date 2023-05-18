import darkmode from "../../assets/darkmode.svg"
import "./header-top.css"

export const HeaderTop = () => {
  return (
    <div className="headerTop-content">
       <a className="headerTop__text">Where in the world?</a>
       <a className="headerTop__btn">
        <img src={darkmode} alt="darkmode" />
       </a>
    </div>
  )
}
