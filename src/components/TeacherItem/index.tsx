import React from 'react'
import whatsapp from '../../assets/images/icons/whatsapp.svg' 
import './styles.css'

function TeacherItem(){
  return(<article className="teacher-item">
  <header>
  <img src="https://avatars2.githubusercontent.com/u/29873371?s=460&u=c41348fe7058adc7ad9f7495b64d2ae540b6994d&v=4" alt="Jean Carlos"/>
    <div>
      <strong>Jean Carlos</strong>
      <span>Desenvolvimento</span>
    </div>
    </header>
<p>
  Apaixonado por Tecnologia e linguas entrangeiras!
</p>
<footer>
<p>Preço/Hora
    <strong>R$80,00</strong>

  </p>
  <button type="button">
    <img src={whatsapp} alt="WhatsApp"/>
    Entrar em contato
  </button>
</footer>


</article>)
}


export default  TeacherItem;