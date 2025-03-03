import React, {useEffect} from 'react'
import './Omeni.css'
import Footer from '../../components/Footer/Footer'
export default function Omeni() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='about'>
      <div className="about-hero">
        <h3>Obožavam da treniram i da <br/>pomažem ljudima</h3>
      </div>
      <div className="about-next">
        <div className="first">
          <h3>O meni</h3>
          <p>
          Većina vas me zna kao Čupavi Trener, a neko me možda još uvek ne poznaje. Zato želim zvanično da vam se predstavim. Ja sam Vanja Selmović. Od malena sam bila veoma živahno i nestašno dete, i verujem da me upravo takvo odrastanje povuklo u ovaj svet – svet fitnesa.
          </p>
        </div>
          <img src="/img/about-vanja.webp" alt="Vanja - personalni trener" />
        <div className="second">
          <h3>Moji počeci</h3>
          <p>Bavila sam se gimnastikom i odbojkom, i ta ljubav i dalje traje, ali sada u rekreativnom obliku. U teretanu sam prvi put kročila sa 13–14 godina i odmah se zaljubila u pokret. Svaki put kada bih preskočila trening, osećala bih se prazno. Tada sam shvatila da je fitnes moj poziv.

Kada mi je trenerka predložila da počnem 
da radim kod nje, morala sam da odbijem jer sam tada još uvek bila dete i imala školske obaveze. Krenula sam u srednju školu, ali su usledile prepreke – bolest, pandemija… Ipak, nisam odustala. Nastavila sam da treniram kod kuće, koristeći par tegova, ranac pun knjiga, balone s vodom i sve što mi je bilo 
dostupno. U međuvremenu, počela sam da učim sve što mogu o teretani i fitnesu.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
