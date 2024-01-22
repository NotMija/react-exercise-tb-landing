import React from 'react';

const Navbar = () => {
  const nav = {
    "img": "https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/607eeb4b0517b6659206c10f_thebridgelogo.svg",
    "links": [
      "Cursos",
      "Donde estudiar",
      "Financiacion y becas",
      "Empresas e instrucciones",
      "Sobre nosotros"
    ]
  };

  return (
    <nav>
      <img src={nav.img} alt="Logo" />
      <ul>
        {nav.links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;