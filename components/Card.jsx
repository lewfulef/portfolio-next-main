import { Button } from "@nextui-org/react";

import { BsDatabaseFill, BsDatabaseFillAdd, BsDatabaseFillCheck, BsDisplayport, BsDownload } from "react-icons/bs";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col px-20 sm:px-5">
      <div className="mb-5">
        <h2 className="text-3xl font-bold">
          Bienvenid@ a mi portafolio
        </h2>
      </div>
      <div>
        <p className="text-lg">
          Aquí podrás encontrar los proyectos que he realizado durante mi período como estudiante de 
          Desarrollo Web Fullstack.
        </p>
      </div>
      <div className="mt-5">
        <Button
          color="default"
          variant="ghost"
          className="py-7 px-5 text-base"
          radius="lg"
          endContent={<BsDatabaseFillCheck fontSize={20} />}
          href="/projects"
        >
          Ver proyectos
        </Button>
      </div>
    </div>
  );
};

export default Card;
