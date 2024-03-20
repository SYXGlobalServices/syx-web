import BannerImage from "@/components/BannerImage";
import Prototype from "../assets/prototype.png"
import Image from "next/image";
import CardImg from "../assets/card_img.png"
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
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
      <div className="p-10">
        <Card
        cssCard={'w-64 rounded-3xl border-solid	border border-[var(--secondary)] relative pt-5'}
        cssImg={'absolute w-[8rem] -top-3/4 left-1/4'}
        src={CardImg}
        alt={'SYX'}
        cssContent={'text-black p-6'}
        text={'Con SYX dejas de perder dinero al conservar tu dinero e inversiones en dólares.'}
        />
      </div>
      <div className="p-10">
        <Card
        cssCard={'w-64 rounded-3xl shadow-md shadow-slate-600 relative pt-5'}
        cssImg={'absolute w-[8rem] -top-3/4 left-1/4'}
        src={CardImg}
        alt={'SYX'}
        cssContent={'text-black p-6'}
        text={'Con SYX dejas de perder dinero al conservar tu dinero e inversiones en dólares.'}
        />
      </div>
    </>
  );
}
