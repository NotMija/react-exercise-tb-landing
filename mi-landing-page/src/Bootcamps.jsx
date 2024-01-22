import React from 'react';

const Bootcamps = () => {
  const Cards = {
    "header": "Descubre nuestros Bootcamps",
    "title": "EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA",
    "courses": [
        {
            "name": "ds",
            "title": "Data Science",
            "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649ad574f4fc2cffa3f94_DS.svg",
            "hours": "480",
            "format": "Presencial/Remoto",
            "description": "Aprenderás Python, sus librerías de análisis de datos y de Machine Learning y Deep para construir y desplegar modelos y mostrar su utilidad al negocio."
        },
        {
            "name": "fs",
            "title": "Desarrollo Web Full Stack",
            "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a64a28aaa7f58060aa5dcb_FS.svg",
            "hours": "480",
            "format": "Presencial/Remoto",
            "description": "Con nuestro bootcamp te transformarás en un desarrollador Web Full Stack. Aprende desde cero HTML, JavaScript node.JS y bases de datos. Acelera tus proyectos utilizando ReactJS, y conoce los fundamentos de DevOps para el despliegue y mantenimiento de tus proyectos."
        },
        {
            "name": "dm",
            "title": "Digital Marketing OPS",
            "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6af5f8903204be404b0_DM.svg",
            "hours": "480",
            "format": "Presencial/Remoto",
            "description": "Una aproximación práctica al Marketing Digital que te permitirá conocer las ultimas herramientas y los nuevos medios, con foco en la planificación, análisis y automatización para la optimización de resultados. * Becas L'Oréal Digital Marketing Ops"
        },
        {
            "name": "ux",
            "title": "UX/UI Product Design",
            "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649f7b1cdbc9d2f9b93be_PD.png",
            "hours": "480",
            "format": "Presencial/Remoto",
            "description": "Te familiarizarás con conceptos clave sobre experiencia de usuario: metodologías de investigación y análisis de datos, arquitectura de la información, ideación y principios del diseño visual y de experiencia de usuario. * Becas Opinno Digital Experience"
        }
    ]
}


return (
    <section>
      <h2>{Cards.header}</h2>
      <h3>{Cards.title}</h3>
      <div>
        {Cards.courses.map(course => (
          <div key={course.name}>
            <img src={course.img} alt={course.title} />
            <h4>{course.title}</h4>
            <p>{course.hours} horas</p>
            <p>{course.format}</p>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bootcamps;