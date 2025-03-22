import { CardProjects } from './card-section.jsx';

import img from '../../assets/daka.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";





export function SectionProjects () {
  return (
    <div className="flex flex-col gap-4 w-full">
    <h2 className="text-5xl text-center font-bold">Project</h2>
    <div className="flex flex-col gap-3">
      <h3 className="text-3xl font-bold">Tienda DAKA</h3>
      <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit impedit dolores voluptatem, necessitatibus quas ad deleniti sed dolorum eum ipsam aliquid natus iure adipisci explicabo animi veritatis maxime numquam.</p>
      <div className="flex justify-center flex-col sm:flex-row sm:justify-between gap-3 items-center">
        <section className='flex gap-5'>
          <CardProjects icon={<FaHtml5 size={30} color='#e6431a'/>} text={'HTML'}/>
          <CardProjects icon={<FaCss3Alt size={30} color='#1572B6 '/>} text={'CSS'}/>
          <CardProjects icon={<FaJsSquare size={30} color='yellow'/>} text={'JavaScript'}/>
        </section>
        <section className="flex items-center gap-5">
          <a href="#"><DiGithubBadge size={40}/></a>
          <a href="#"><FaExternalLinkAlt size={25}/></a>
        </section>
      </div>
      <img className="rounded-3xl" src={img} alt="" />
    </div>
  </div>
  )
}
