"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";

const projects = () => {
  return (
    <div className="grid grid-cols-4 h-screen items-center">
      <div className="flex flex-col justify-center items-center">
        
        <h3 className="text-3xl font-bold text-black">Tu texto aquí</h3>
        <Image
          width={300}
          height={300}
          alt="Landing de negocio"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706532865/Screen_Shot_2024-01-29_at_09.52.21_m3juxe.png"
        />
        <div className="flex gap-5 mt-5">
          <Button color="default" variant="faded">repositorio</Button>
          <Button color="default" variant="ghost">deploy</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          height={300}
          width={300}
          alt="CRUD app"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706626295/Screen_Shot_2024-01-30_at_11.49.11_pluibh.png"
        />
        <div className="flex gap-5 mt-5">
          <Button color="primary">repositorio</Button>
          <Button color="secondary">deploy</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          height={300}
          width={300}
          alt="Restaurant app"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706626358/Screen_Shot_2024-01-30_at_11.50.10_o40ayt.png"
        />
        <div className="flex gap-5 mt-5">
          <Button color="primary">repositorio</Button>
          <Button color="secondary">deploy</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          height={300}
          width={300}
          alt="E-commerce"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706626389/Screen_Shot_2024-01-30_at_11.49.38_kvfolc.png"
        />
        <div className="flex gap-5 mt-5">
          <Button color="primary">repositorio</Button>
          <Button color="secondary">deploy</Button>
        </div>
      </div>
    </div>
  );
};

export default projects;
