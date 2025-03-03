import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <img src="/img/logo2.png" alt="" className="footer-logo" />
        <div className="footer-nav">
            <div className="footer-section">
                <h6>Navigacija</h6>
                <Link to="/" >Početna</Link>
                <Link to="/programi" >Programi</Link>
                <Link to="/blog" >Blog</Link>
                <Link to="/o-meni" >O meni</Link>
                <Link to="/moj-profil" >Moj profil</Link>
                <Link to="/kontakt" >Kontakt</Link>
            </div>
            <div className="footer-section">
                <h6>Društvene mreže</h6>
                <a target="_blank" href='https://www.instagram.com/cupavitrener'>Instagram</a>
                <a target="_blank" href='https://www.instagram.com/cupavitrener'>Youtube</a>
                <a target="_blank" href='https://www.tiktok.com/@cupavitrener'>Tiktok</a>
            </div>
        </div>
    </div>
  )
}
