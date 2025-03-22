import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss, faSquareJs, faReact, faGithub, faFigma, faLinux, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import tailwindIcon from '../../assets/1.svg'
import posgreIcon from '../../assets/postgresql.svg'
import { RiSupabaseFill } from "react-icons/ri";


export function SkillCardFrontend () {
  return (
    <section className="w-full border-2 rounded-2xl text-center p-3 shadow-2xs bg-black/50 border-white/40 ">
      <h3 className="text-3xl font-bold mb-5">Frontend</h3>

      <ul className="flex flex-wrap text-5xl gap-3 justify-center">
       <li><FontAwesomeIcon className='text-orange-600' icon={faHtml5} /></li>
       <li><FontAwesomeIcon className='text-indigo-600' icon={faCss} /></li>
       <li><FontAwesomeIcon className='text-yellow-500' icon={faSquareJs} /></li>
       <li><FontAwesomeIcon className='text-blue-500' icon={faReact} /></li>
       <img src={tailwindIcon} width={45} alt="" />
      </ul>
    </section>
  )
}

export function SkillCardBackend () {
  return (
    <section className="w-full h-35 border-2 rounded-2xl text-center p-3 shadow-2xs bg-black/50 border-white/40">
      <h3 className="text-3xl font-bold mb-5">Backend</h3>

      <ul className="flex flex-wrap text-5xl gap-3 justify-center items-center">
        <li><img src={posgreIcon} width={45} alt="" /></li>
        <li><FontAwesomeIcon className='text-green-600' icon={faNodeJs} /></li>
        <li><RiSupabaseFill color='#3ECF8E'/></li>
      </ul>
    </section>
  )
}

export function SkillCardTools () {
  return (
    <section className="w-full h-35 border-2 rounded-2xl text-center p-3 shadow-2xs bg-black/50 border-white/40">
      <h3 className="text-3xl font-bold mb-5">Tools</h3>

      <ul className="flex flex-wrap text-5xl gap-3 justify-center items-center">
        <li><FontAwesomeIcon icon={faGithub} /></li>
        <li><FontAwesomeIcon icon={faFigma} /></li>
        <li><FontAwesomeIcon icon={faLinux} /></li>
      </ul>
    </section>
  )
}
