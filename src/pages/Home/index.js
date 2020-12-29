import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div>Página HOme/Inicial
            <Link to="/about">Pagina sobre</Link>
        </div>
        
    )
}

export default Home;