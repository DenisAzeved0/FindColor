import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';

const Button = () =>{
  return (
    <div id="page-button">
      <div className="content">
        <header>

        </header>

        <main>
          <h1>Hover</h1>
          <p>Selecione a cor para o botão abaixo</p>
          <Link to="/">
            <span>
              <FiPlay/>
            </span>
            <strong>Botão 1</strong>
          </Link>
          <Link to="/">
            <span>
              <FiPlay/>
            </span>
            <strong>Botão 2</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Button;