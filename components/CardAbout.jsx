import React from "react";

const CardAbout = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl mb-5 font-bold">
          Mi nombre es Vicente Lautaro Huichalaf Bassano
        </h1>
      </div>
      <div>
        <p className="text-xl text-center px-5 sm:px-20">
          Soy Desarrollador Web Fullstack titulado de la Universidad del
          Desarrollo, con estudios en Licenciatura en Artes Visuales de la
          Universidad Austral de Chile.
          <br />
          <br />
          Soy un profesional proactivo y orientado al autoaprendizaje, con un
          sólido conocimiento de colores y un constante interés en explorar
          nuevas tecnologías. Mi enfoque colaborativo y habilidades para
          trabajar en equipo complementan mi capacidad para aportar de manera
          significativa a proyectos creativos y dinámicos. Intento ayudar
          siempre en lo que más se pueda y de la manera más amable posible.
          <br />
          <br />
          Mi stack de conocimiento se basa en tecnologías como
          <br />
          <br />
          Me fascina el frontend, he aprendido tecnologías como: REACT,
          TypeScript, Next, CSS, TailwindsCSS, Bootstrap
          <br /> 
          y en el backend: ExpressJS,
          MongoDB, MySQL, Firebase.
          <br />
        </p>
      </div>
    </div>
  );
};

export default CardAbout;
