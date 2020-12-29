import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div>
            <h1>Página Página inicialInicial</h1>
            <Link to="/about">Pagina sobre</Link>
        </div>
        
    )
}

export default Home;