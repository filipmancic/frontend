import React from 'react'
import { useState } from 'react';
import './Modal.css'
function Modal() {
const [gender, setGender] = useState('');
const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [age, setAge] = useState('');
const [bmrResult, setBmrResult] = useState(null);

    const handleBmrCalculation = (e) => {
        e.preventDefault();
        let bmr = 0;
        if (gender === 'male') {
          bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === 'female') {
          bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        setBmrResult(bmr.toFixed(2));
      };
    
    const closeModal = () =>{
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
  return (
    <div id="modal" className='modal-body'>
        <div className='modal-content'>
        <h2>BMR Kalkulator</h2>
  <form onSubmit={handleBmrCalculation}>
    <label>
      Pol:<br/>
      <select value={gender} onChange={(e) => setGender(e.target.value)} required>
        <option value="">Izaberite pol</option>
        <option value="male">Muški</option>
        <option value="female">Ženski</option>
      </select>
    </label>
    <label>
      Težina (kg):<br/>
      <input
        type="number"
        value={weight}
        defaultValue={0}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
    </label>
    <label>
      Visina (cm):<br/>
      <input
        type="number"
        value={height}
        defaultValue={0}
        onChange={(e) => setHeight(e.target.value)}
        required
      />
    </label>
    <label>
      Starost (godine):<br/>
      <input
        type="number"
        value={age}
        defaultValue={0}
        onChange={(e) => setAge(e.target.value)}
        required
      />
    </label>
  </form>
  {bmrResult && <p>Vaš BMR je: {bmrResult} kalorija/dan</p>}
  <br/>
  <button onClick={handleBmrCalculation} className='button' type="submit">Izračunaj</button>
  <button onClick={closeModal} className='button btn-bmr'>Zatvori</button>
        </div>
          
    </div>
  )
}

export default Modal