import React, {useEffect} from 'react'
import Hero from '../../components/Hero/Hero'
import ZastoOnline from '../../components/ZastoOnline/ZastoOnline'
import TreningIshrana from '../../components/TreningIshrana/TreningIshrana'
import Programi from '../../components/Programi/Programi'
import PitanjaIOdgovori from '../../components/PitanjaIOdgovori/PitanjaIOdgovori'
import Footer from '../../components/Footer/Footer'
export default function Pocetna() {
  useEffect(() => {
      window.scrollTo(0, 0);
    });
  return (
    <div>
        <Hero/>
        <ZastoOnline/>
        <TreningIshrana/>
        <Programi/>
        <PitanjaIOdgovori/>
        <Footer/>
    </div>
  )
}
