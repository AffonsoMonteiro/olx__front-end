import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

function Page() {
  /**  CASO FOR USAR O REDUCERS DEIXEI ESSES DOIS COM EXEMPLO
  const dispatch = useDispatch()
  const email = useSelector(state => state.user.email)
*/
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default Page;
