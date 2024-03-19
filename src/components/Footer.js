import { socialLinks, companyName } from "../util/data.js";
import { Icon } from "./Icon.js";

const company = companyName;
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-center text-white">
      <div className="container px-6 pt-6 mx-auto">
        <div className="mb-6 flex justify-center w-full">
          {socialLinks.map((link) => (
            <a
              title={link.id}
              aria-label={link.description}
              key={link.id}
              href={link.url}
              id={link.id}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 flex items-center justify-center"
            >
              <Icon color="white" width="24" height="24" src={link.src} />
            </a>
          ))}
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="p-4 text-center bg-black bg-opacity-20">
        © 2024 {company} S.A. de C.V.
      </div>
    </footer>
  );
}
