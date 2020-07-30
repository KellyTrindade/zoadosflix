import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} to="Logo" />
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
