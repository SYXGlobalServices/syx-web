import { socialMedia } from "../util/data.js";
import Image from "next/image";

export default function Footer() {
    return (
        
    <footer className="grid grid-cols-12 bg-gradient-to-r from-[#0A2647]  to-[#205295] rounded-t-[3rem] py-6 text-xs text-white">
        <div className="col-start-2 col-span-10">
            <h6 className="uppercase mb-2 px-6">Contacta con syx</h6>
            <div className="flex flex-col sm:flex-row justify-between space-y-2">
                <div className="grid grid-flow-col auto-cols-min space-x-3 ">
                    {socialMedia.map(item => (
                        <a
                        title={item.text}
                        key={item.text}
                        href={item.href}
                        className="w-8 hover:scale-110 transition ease-in-out duration-300"
                        >
                            <Image
                            priority
                            className="invert"
                            src={item.icon}
                            alt={item.text}
                            />
                        </a>
                    ))}
                    
                </div>
                <div className="opacity-80 flex space-x-3 self-end">
                    <p>Términos y condiciones</p>
                    <p>Aviso de provacidad</p>
                </div>
            </div>
            <hr className="my-2 h-0.5 border-t-0 bg-[var(--secondary)]" />
            <p className="text-right opacity-80 text-[var(--secondary)] px-6">Copyright © 2024 SYX Services Inc</p>
        </div>
    </footer>
    );
  }