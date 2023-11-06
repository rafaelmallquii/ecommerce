import { BiLogoYoutube } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

function Footer() {
  return (
    <footer className="bg-[#FF0000] md:grid md:grid-cols-2 md:items-center md:px-10">
        <section className="pt-5 md:pt-0 md:grid md:place-items-start">
            <p className="text-white text-center">© 2022 Mipclista. Todos los derechos reservados</p>
        </section>
        <section className="py-5 md:items-center md:grid md:place-items-end">
            <div className="flex justify-center items-center gap-1">
            <a href="#">
                <button className="bg-[#EF0000] hover:bg-red-700 p-1 rounded-md">
                <BiLogoYoutube className="text-white w-[25px] h-[25px]" />
                </button>
            </a>
            <a href="#">
                <button className="bg-[#EF0000] hover:bg-red-700 p-1 rounded-md">
                <AiOutlineInstagram className="text-white w-[25px] h-[25px]" />
                </button>
            </a>
            <a href="#">
                <button className="bg-[#EF0000] hover-bg-red-700 p-1 rounded-md">
                <BiLogoFacebook className="text-white w-[25px] h-[25px]" />
                </button>
            </a>
            </div>
        </section>
    </footer>
  );
}

export default Footer;