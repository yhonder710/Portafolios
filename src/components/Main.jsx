import { Header } from "./Header.jsx";
import { Presentacion } from "./presentacion.jsx";
import { SectionSkill } from "./section-skill/Section-skill.jsx";
import { SectionContac } from "./contact/section-contact.jsx";
import { SectionProjects } from "./section-projects/section-project.jsx";







export function Main (){
  return(
    <main className="lg:w-250 w-full px-20 lg:px-0 h-full flex flex-col justify-center items-center gap-10 py-5 text-white pt-30">
      <Header/>
      <Presentacion/>
     {/*  <SectionContac/>
      <SectionSkill/>
     <SectionProjects/> */}
    </main>
  )
}
