import { FaRegUser } from "react-icons/fa6";


export function Header () {
  return (
    <header className="w-full flex justify-center">
      <nav className="h-15 w-130 bg-black/50 rounded-4xl text-white font-bold text-[18px]">
      <ul className="h-full flex items-center justify-evenly">
        <li>Sobre mi</li>
        <li>habilidades</li>
        <li>Projectos</li>
        <li>Social</li>
      </ul>
      </nav>
    </header>
  )
}
