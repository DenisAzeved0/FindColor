import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi'

const Home = () =>{
  return (
    <div id="page-home">
      <div className="content">
        <header>

        </header>

        <main>
          <h1>FindColor</h1>
          <p>Encontre a cor perfeita para cada situação</p>
          <Link to="/button">
            <span>
              <FiPlay/>
            </span>
            <strong>Efeito hover</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;