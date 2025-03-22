import { CardContact } from "./card-contact.jsx";

/* iconos */
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { PiReadCvLogoLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";



export function SectionContac () {
  return(
    <div className="w-200 ">
        <h2 className="text-center text-5xl font-bold mb-8">Social</h2>
        <div className="flex flex-col gap-5">
          <section className="flex justify-evenly">
           <CardContact icon={<FaLinkedin size={70} color="#0A66C2"/>} text={'LinkedIn'}/>
           <CardContact icon={<VscGithubInverted size={70} color="#0A66C2"/>} text={'GitHub'}/>
           <CardContact icon={<PiReadCvLogoLight size={70} color="#0A66C2"/>} text={'CV'}/>
          </section>
          <section className="flex justify-center ">
          <CardContact icon={<MdOutlineMail size={70} color="#0A66C2"/>} text={'Example@Gmail.com'}/>
          </section>
        </div>
      </div>
  )
}
