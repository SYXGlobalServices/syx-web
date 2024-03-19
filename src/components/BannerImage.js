import Image from "next/image";
import BannerHorizontal from "../../src/assets/BannerHorizontal.webp";
import BannerVertical from "../../src/assets/BannerVertical.webp";

export default function BannerImage() {
  return (
    <>
      <Image
        priority
        src={BannerHorizontal}
        sizes="100vw"
        style={{
          height: "100vh",
        }}
        alt="Banner del Inicio de SYX Global Services"
        className="hidden sm:block inset-0 w-full object-cover"
      />
      <Image
        priority
        src={BannerVertical}
        sizes="100vw"
        style={{
          height: "100vh",
        }}
        alt="Banner del Inicio de SYX Global Services"
        className="block sm:hidden inset-0 w-full object-cover"
      />
    </>
  );
}
