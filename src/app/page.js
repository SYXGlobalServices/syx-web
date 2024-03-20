import BannerImage from "@/components/BannerImage";
import Prototype from "../assets/prototype.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[5rem] h-[95vh]">
      <div className="relative">
        <BannerImage />
        <Image
        priority={true}
        src={Prototype}
        sizes="100vw"
        alt="Banner Image" 
        className="absolute -left-[12%] -bottom-[12%] w-[80%]"
        />
        <div className="absolute grid grid-cols-12 grid-rows-6 top-0 w-full h-full">
          <div className="row-start-2 col-start-2 sm:col-start-7 col-span-10 sm:col-span-4 text-4xl sm:text-6xl">
            <h1 className="">Con SYX</h1>
            <h1 className="">tu dinero siempre crece</h1>
          </div>
          <div className="row-start-4 sm:row-start-5 col-start-2 sm:col-start-7 col-span-10 sm:col-span-4">
            <h1 >
              SYX es una plataforma para todos que te ofrece un crecimiento y apoyo financiero mientras disfrutas de servicios y productos de calidad a precios accesibles.
            </h1>
          </div>
        </div>
      </div> 
    </div>
  );
}
