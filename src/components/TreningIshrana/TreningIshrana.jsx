import React from 'react'
import './TreningIshrana.css'
import Modal from '../Modal/Modal'

export default function TreningIshrana() {
  const openModal = () =>{
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }
  
  return (
    <div className='main ti z-auto'>
        <div className='col-md-6 d-flex switch'>
           <img src="img/phone3.png" alt="" className="phone-img" />
        </div>
        <div className='col-md-6'>
            <h2 className='pos-rel'>2 + 2 = 4, dakle trening i ishrana</h2>
            <h3 className='pos-rel'>A je l’ mogu ja samo da dižem tegove?</h3>
            <p className='pos-rel'><b> Apsolutno možeš!</b> Ukoliko si početnik i ishrana ti nije „toliko loša“, rezultati će svakako biti vidljivi, jer su treninzi intenzivni i prilagođeni tvom nivou utreniranosti. Imaš video objašnjenje svake vežbe, video poziv, mogućnost da mi pošalješ poruku, pa čak i da imamo trening mesečno (u zavisnosti od plana), tako da su rezultati <b>neminovni</b>.
<br/>
Međutim, nakon određenog vremena, napredak će se usporiti, i tada je poboljšanje ishrane pravi izbor za nastavak razvoja.</p>
            <h3 className='pos-rel'>Zdravo je i idealno</h3>
            <p className='pos-rel'>Zdrava ishrana nije toliko zahtevna i posle nekog vremena osetićeš koliko je tvoje telo zahvalno što ga hraniš kvalitetnim gorivom. Protein će te najviše zasititi i pomoći će ti da izgradiš mišiće koji su ti bitni <b>bilo da želis da se ugojiš ili da smršas</b>. Ugljeni hidrati će ti dati energiju i držaće te na nogama, <b>obavezno pre treninga!</b> Zdrave masti će ti držati hormone u balansu. Dakle ne treba izbegavati ni proteine ni ugljene hidrate ni masti već ih sve uklopiti u naš kalorijski unos koji ćemo dobiti preko BMR. <b>Možeš ga izračunati na linku ispod.</b>
</p>
            <button onClick={openModal} className="button">Izračunaj BMR</button>
            <Modal/>
            { /* <div className="half-circle"></div> */}
        </div>
    </div>
  )
}
