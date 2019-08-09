import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login'
import Main from './pages/Main'

/**é preciso ter um route por página da aplicação 
 * Qiando estiver no / ()raiz, vai abrir o componente login
 * 
 * 
*/
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}/>
      <Route path="/dev/:id" component={Main}/>
    </BrowserRouter>
  );
}
