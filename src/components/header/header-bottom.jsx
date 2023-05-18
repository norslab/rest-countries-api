import "./header-bottom.css"
import search from '../../assets/search.svg'

export const HeaderBottom = () => {
  return (
    <div className="headerBottom__content">
       <form className="headerBottom__form">
         <div className="headerBottom__search">
            <img src={search} alt="search-img" />
         </div>
          <input type="text" className="headerBottom__input" placeholder="Search for a country…" />
       </form>
       <select className="headerBottom__select">
          <option className="headerBottom__option">Filter by Region</option>
          <option className="headerBottom__option">Africa</option>
          <option className="headerBottom__option">America</option>
          <option className="headerBottom__option">Asia</option>
          <option className="headerBottom__option">Europe</option>
          <option className="headerBottom__option">Oceania</option>
       </select>
    </div>
  )
}
