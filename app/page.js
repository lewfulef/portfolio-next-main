import Card from "@/components/Card";
import { Image } from "@nextui-org/react";


export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  items-center h-screen sm:px-20 xl:px-80 ">
      <div className=" flex justify-center h-full sm:h-auto items-end">
        <Image
          width={300}
          alt="lau profile"
          src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1706530719/foto_zsqqrl.jpg"
        />
        
      </div>
      <Card />
    </div>
  );
}
