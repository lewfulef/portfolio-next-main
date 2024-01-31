"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";

const projects = () => {
  return (
    <div className="grid grid-cols-4 h-screen items-center">
      <div className="flex flex-col justify-center items-center">
        
        <h4 className="text-2xl mb-5 font-light text-black">Landing de negocio</h4>
        <Image
          width={300}
          height={300}
          alt="Landing de negocio"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706532865/Screen_Shot_2024-01-29_at_09.52.21_m3juxe.png"
        />
        <div className="flex gap-5 mt-5">
          <a href="https://github.com/lewfulef/landing-de-negocio/"><Button color="default" variant="faded">Ver repositorio</Button></a>
          <a href="https://lewfulef.github.io/landing-de-negocio/"><Button color="default" variant="ghost">Ver despliegue</Button></a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      <h4 className="text-2xl mb-5 font-light text-black">CRUD app</h4>
        <Image
          height={300}
          width={300}
          alt="CRUD app"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706626295/Screen_Shot_2024-01-30_at_11.49.11_pluibh.png"
        />
        <div className="flex gap-5 mt-5">
          <a href="https://github.com/lewfulef/aplicacionCRUD"><Button color="default" variant="faded">Ver repositorio</Button></a>
          <a href="https://lewfulef.github.io/aplicacionCRUD/"><Button color="default" variant="ghost">Ver despliegue</Button></a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      <h4 className="text-2xl mb-5 font-light text-black">Restaurant App</h4>
        <Image
          height={300}
          width={300}
          alt="Restaurant app"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706626358/Screen_Shot_2024-01-30_at_11.50.10_o40ayt.png"
        />
        <div className="flex gap-5 mt-5">
          <a href="https://github.com/lewfulef/restaurant-app-dg/"><Button color="default" variant="faded">Ver repositorio</Button></a>
          <a href="https://lewfulef.github.io/restaurant-app-dg/"><Button color="default" variant="ghost">Ver despliegue</Button></a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      <h4 className="text-2xl mb-5 font-light text-black">E-commerce</h4>
        <Image
          height={300}
          width={300}
          alt="E-commerce"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706626389/Screen_Shot_2024-01-30_at_11.49.38_kvfolc.png"
        />
        <div className="flex gap-5 mt-5">
          <a href="https://github.com/lewfulef/client/"><Button color="default" variant="faded">Ver repositorio</Button></a>
          <a href="https://lewfulef.github.io/client/"><Button color="default" variant="ghost">Ver despliegue</Button></a>
        </div>
      </div>
    </div>
  );
};

export default projects;
