import { FaRegUser } from "react-icons/fa6";
import { BiBody } from "react-icons/bi";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";





export function Header () {
  return (
    <header className="w-full flex justify-center fixed z-10 top-5">
      <nav className="h-12 w-full mx-5 sm:w-130 bg-black/50 rounded-4xl border border-white/40 text-white font-bold text-[13px] sm:text-[18px]">
      <ul className="h-full flex items-center justify-evenly">
        <li><a href="#" className="flex items-center gap-1"><FaRegUser size={22}/>Sobre mi</a></li>
        <li><a href="#" className="flex items-center gap-1"><IoShareSocial/> Social</a></li>
        <li><a href="#" className="flex items-center gap-1"><BiBody size={25}/> habilidades</a></li>
        <li><a href="#" className="flex items-center gap-1"><PiProjectorScreenChart size={25}/> Projectos</a></li>
      </ul>
      </nav>
    </header>
  )
}
