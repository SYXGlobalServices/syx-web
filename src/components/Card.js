import Image from "next/image";

export default function Card({cssCard,cssContent,cssImg,cssTitle,cssText,src,alt,title,text}) {
  return (
         <div className={`${cssCard}`}>
              <Image 
              src={src}
              priority={true}
              alt={alt}
              sizes="100vw"
              className={`${cssImg}`}
              />
              <div className={`${cssContent}`}>
                {title?<h1 className={` ${cssTitle}`}>{title}</h1>:''}
                  <p className={`${cssText}`}>
                    {text}
                  </p>
              </div>
            </div> 

    );
  }