import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import './Login.css'

import api from '../services/api'

/**Componente estado e propriedade é a base do reac */

export default function Login({ history }) {
  const [username, setUsername] = useState('');//inicializa ela em branco

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username,
    })

    const { _id } = response.data;
   // console.log(_id)

   // history.push(`/dev/${_id}`)
   history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu usuário no Github"
          value={username}
          onChange={e => setUsername(e.target.value)}//ele vai setar a variavel username com o valor deste campo
        />
        <button type="submit">Enviar</button>
      </form>

    </div>

  );
}

