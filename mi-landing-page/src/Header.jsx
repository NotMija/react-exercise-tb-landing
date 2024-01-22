import React from 'react';

const Header = () => {
  const header = {
    "title": "Acelera tu carrera digital",
    "subheading": "En una época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.",
    "paragraph": "Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia una de las profesiones del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo de Software, Diseño de Producto UX/UI o Marketing Digital.",
    "button": "Pide información"
  };

  return (
    <header>
      <h1>{header.title}</h1>
      <h2>{header.subheading}</h2>
      <p>{header.paragraph}</p>
      <button>{header.button}</button>
    </header>
  );
};

export default Header;