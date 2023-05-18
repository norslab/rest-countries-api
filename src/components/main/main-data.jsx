import './main-data.css'
import germany from '../../assets/germany.svg'
import usa from '../../assets/usa.svg'
import brazil from '../../assets/brazil.svg'
import iceland from '../../assets/iceland.svg'
import afganistan from '../../assets/afganistan.svg'
import aland from '../../assets/aland.svg'
import albania from '../../assets/albania.svg'
import algeria from '../../assets/algeria.svg'

export const MainData = () => {
  return (
    <div className="main-data">
      <ul className="main-data__list">
         <li className='main-data__item'>
            <div className='flag'>
               <img src={germany} alt="germany-flag" />
            </div>
           <div className="info">
           <h2 className='title'>Germany</h2>
            <p className="text">Population: <span className="span">81,770,900</span></p>
                <p className="text">Region:  <span className="span">Europe</span></p>
                <p className="text">Capital:  <span className="span">Berlin</span></p>
           </div>
         </li>
         <li className='main-data__item'>
            <div className='flag'>
               <img src={usa} alt="usa-flag" />
            </div>
            <div className="info">
              <h2 className='title'>United States of America</h2>
             <p className="text">Population: <span className="span">323,947,000</span></p>
                <p className="text">Region:  <span className="span">Americas</span></p>
                <p className="text">Capital:  <span className="span">Washington, D.C.</span></p>
            </div>
            
         </li>
         <li className='main-data__item'>
            <div className='flag'>
               <img src={brazil} alt="brazil-flag" />
            </div>
            <div className="info">
              <h2 className='title'>Brazil</h2>
            <p className="text">Population: <span className="span">206,135,893</span></p>
                <p className="text">Region:  <span className="span">Americas</span></p>
                <p className="text">Capital:  <span className="span">Brasília</span></p>
            </div>
         </li>
         <li className='main-data__item'>
            <div className='flag'>
               <img src={iceland} alt="iceland-flag" />
            </div>
            <div className="info">
               <h2 className='title'>Iceland</h2>
            <p className="text">Population: <span className="span">334,300</span></p>
                <p className="text">Region:  <span className="span">Europe</span></p>
                <p className="text">Capital:  <span className="span">Reykjavík</span></p>
            </div>
           
         </li>
      </ul>
      <ul className="main-data__list">
         <li className='main-data__item'>
            <div className='flag'>
               <img src={afganistan} alt="afganistan-flag" />
            </div>
            <div className="info">
              <h2 className='title'>Afghanistan</h2>
            <p className="text">Population: <span className="span">27,657,145</span></p>
                <p className="text">Region:  <span className="span">Asia</span></p>
                <p className="text">Capital:  <span className="span">Kabul</span></p>
            </div>
         </li>
         <li className='main-data__item'>
            <div className='flag'>
               <img src={aland} alt="aland-flag" />
            </div>
            <div className="info">
              <h2 className='title'>Åland Islands</h2>
            <p className="text">Population: <span className="span">28,875</span></p>
                <p className="text">Region:  <span className="span">Europe</span></p>
                <p className="text">Capital:  <span className="span">Mariehamn</span></p>
            </div>
         </li>
         <li className='main-data__item'>
            <div className='flag'>
               <img src={albania} alt="albania-flag" />
            </div>
            <div className="info">
              <h2 className='title'>Albania</h2>
            <p className="text">Population: <span className="span">2,886,026</span></p>
                <p className="text">Region:  <span className="span">Europe</span></p>
                <p className="text">Capital:  <span className="span">Tirana</span></p>
            </div>
         </li>
         <li className='main-data__item'>
            <div className='flag'>
               <img src={algeria} alt="algeria-flag" />
            </div>
            <div className="info">
              <h2 className='title'>Algeria</h2>
            <p className="text">Population: <span className="span">40,400,000</span></p>
                <p className="text">Region:  <span className="span">Africa</span></p>
                <p className="text">Capital:  <span className="span">Algiers</span></p>
            </div>
         </li>
      </ul>
    </div>
  )
}
