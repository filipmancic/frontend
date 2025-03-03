import React, {useEffect} from 'react'
import './Programi.css'
import Footer from '../../components/Footer/Footer'
export default function Programi() {
  useEffect(() => {
      window.scrollTo(0, 0);
    });
  return (
    <div className='programi-page'>
      <h2>Izaberi program koji najbolje odgovara tvojim potrebama</h2>
      <div className="cards">
       
        <div className="card">
          <h4>Classic</h4>
          <h6>120€</h6>
          <h5>3 treninga nedeljno</h5>
          <div className="break"></div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Video objašnjenja vežbi</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Personalizovano za tvoj cilj</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Ebook sa 100 recepata</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Praćenje napretka na nedeljnom nivou</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Provera izvodjenja vežbi preko Whatsapp-a</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA7qFp6rLGwjlZvM_6bfYveCD-0XC2asQzdV7WTkXwOYo2wQ/viewform" target='_blank'><button className="button">Kupi program</button></a>
        </div>

        <div className="card">
          <h4>Napredni</h4>
          <h6>150€</h6>
          <h5>4 treninga nedeljno</h5>
          <div className="break"></div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Video objašnjenja vežbi</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Personalizovano za tvoj cilj</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Ebook sa 100 recepata</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Praćenje napretka na nedeljnom nivou</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Provera izvodjenja vežbi preko Whatsapp-a</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>2 video poziva sa mnom</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA7qFp6rLGwjlZvM_6bfYveCD-0XC2asQzdV7WTkXwOYo2wQ/viewform" target='_blank'><button className="button">Kupi program</button></a>
        </div>

        <div className="card special">
          <h4>Student</h4>
          <h6>75€</h6>
          <h5>3 treninga nedeljno</h5>
          <div className="break"></div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Video objašnjenja vežbi</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Personalizovano za tvoj cilj</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Ebook sa 100 recepata</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Praćenje napretka na nedeljnom nivou</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA7qFp6rLGwjlZvM_6bfYveCD-0XC2asQzdV7WTkXwOYo2wQ/viewform" target='_blank'><button className="button">Kupi program</button></a>
        </div>

        <div className="card">
          <h4>Premium</h4>
          <h6>200€</h6>
          <h5>4 treninga nedeljno</h5>
          <div className="break"></div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Video objašnjenja vežbi</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Personalizovano za tvoj cilj</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Ebook sa 100 recepata</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Praćenje napretka na nedeljnom nivou</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Dostupna sam ti na Whatsapp-u svaki dan</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Plan ishrane</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>1 trening po tvom izboru uživo sa mnom</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA7qFp6rLGwjlZvM_6bfYveCD-0XC2asQzdV7WTkXwOYo2wQ/viewform" target='_blank'><button className="button">Kupi program</button></a>
        </div>

        <div className="card">
          <h4>Tromesečni plan</h4>
          <h6>300€</h6>
          <h5>3 treninga nedeljno</h5>
          <div className="break"></div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Video objašnjenja vežbi</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Personalizovano za tvoj cilj</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Ebook sa 100 recepata</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Praćenje napretka na nedeljnom nivou</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Dostupna sam ti na Whatsapp-u svaki dan</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>2 treninga mesecno uživo sa mnom</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Prilagodjavanje plana kako napredujemo</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA7qFp6rLGwjlZvM_6bfYveCD-0XC2asQzdV7WTkXwOYo2wQ/viewform" target='_blank'><button className="button">Kupi program</button></a>
        </div>

        <div className="card">
          <h4>Šestomesečni plan</h4>
          <h6>500€</h6>
          <h5>3 treninga nedeljno</h5>
          <div className="break"></div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Video objašnjenja vežbi</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Personalizovano za tvoj cilj</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Ebook sa 100 recepata</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Praćenje napretka na nedeljnom nivou</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Dostupna sam ti na Whatsapp-u svaki dan</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>2 treninga mesecno uživo sa mnom</p>
          </div>
          <div className="stavka">
            <img src="/img/check.webp" alt="" className="tick" />
            <p>Prilagodjavanje plana kako napredujemo</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA7qFp6rLGwjlZvM_6bfYveCD-0XC2asQzdV7WTkXwOYo2wQ/viewform" target='_blank'><button className="button">Kupi program</button></a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
