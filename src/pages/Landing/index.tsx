import React from 'react';
import logoImg from '../../assets/images/logo.svg'
import landingImage from '../../assets/images/landing.svg'
import {Link} from 'react-router-dom'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
import TeacherList from '../TeacherList';
import TeacherForm from '../TeacherForm';


function Landing(){

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={landingImage} alt="Plataforma de estudos" className="hero-image"/>

        <div className="button-container">

          <Link to="/study" className="study">
            <img src={studyIcon} alt="" className="src"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClasses} alt="" className="src"/>
            Dar Aulas
          </Link>

        </div>

        <span className="total-connections">
          Total de 200 conecões ja realizadas! <img src={purpleHeart} alt="Coração Roxo" />
        </span>

      </div>
    </div>
  )

  
}

export default Landing;