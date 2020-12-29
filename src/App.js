import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Template } from './components/MainComponents'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

import Routes from './Routes'

function Page() {
  /**  CASO FOR USAR O REDUCERS DEIXEI ESSES DOIS COM EXEMPLO
  const dispatch = useDispatch()
  const email = useSelector(state => state.user.email)
*/
  return (
    <BrowserRouter>
      <Template>
        <Header />

          <Routes />

        <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default Page;
