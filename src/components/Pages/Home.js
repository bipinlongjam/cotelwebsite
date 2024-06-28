import React from 'react'
import bedImg from '../../assets/bed.png'
import './Home.css'
import Facilities from './Facilities'
import Map from '../Map/Map'

const Home = () => {
  return (
    <div>
    <div className="home-container">
      <div className="content">
        <div className='head-text'>
        <h1>BEST HOSTEL SERVICE IN KOLKATA- 
         EXPERIRNCE PREMIUM LIVING AT COTEL </h1>
        
        <p>Discover the Best Student and Working Professionals.
        Accommodation with Comfort, Community and Conveinience</p>
        <button className='home-btn'>Find my Cotel</button>
        </div>
        <img src={bedImg} alt="Centered" className="center-image" height="500px" width="500px"/>
      </div>
      </div>
    </div>
  )
}

export default Home
