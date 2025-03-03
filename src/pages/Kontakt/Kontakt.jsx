import React, {useEffect} from 'react'
import './Kontakt.css'
import Footer from '../../components/Footer/Footer'
export default function Kontakt() {
  useEffect(() => {
      window.scrollTo(0, 0);
    });
  return (
    <div>
    <div className='kontakt'>
      <div className='kontakt-card d-flex'>
        <div className="card-text">
          <h1>Kontakt</h1>
          <p>Vanja Selmović</p>
          <p className='mt'>Email</p>
          <p>cupavitrener@gmail.com</p>
          <p className='mt'>Broj telefona</p>
          <p>061 123 4567</p>
          <p className='mt'>Možete me kontaktirati i putem društvenih mreža</p>
          <span className='icons'>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/cupavitrener"><img src="/img/ig.png" alt="" className="ig" /></a>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/cupavitrener"><img src="/img/ytt.png" alt="" className="ytt" /></a>
          <a rel="noreferrer" target="_blank" href="https://www.tiktok.com/@cupavitrener"><img src="/img/tt.png" alt="" className="tt" /></a>
        </span>
        <p className='mt'>Vidimo se na treningu! ;)</p>
        </div>
        <img src="/img/vanjasplashh.png" alt="" />
        
      </div>

    </div>
      <Footer/>
    </div>
  )
}
