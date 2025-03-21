
import { Header } from "./Header.jsx";
import { SectionSkill } from "./section-skill/Section-skill.jsx";


export function Main (){
  return(
    <main className="w-250 h-full flex flex-col justify-center items-center gap-10 py-5">
      <Header/>
      <SectionSkill/>
    </main>
  )
}
