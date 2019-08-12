import React from 'react'
import './Login.css'

import logo from '../assets/logo.svg'

export default function Login () {
  return (
    <div className="login-container">
      <form>
        <img scr={logo} alt="TimDev" />
        <input placeholder="Digite seu usuário no GitHub"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
