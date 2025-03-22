import { CardContact } from "./card-contact.jsx";

/* iconos */
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { PiReadCvLogoLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";



export function SectionContac () {
  return(
    <div className="w-full">
        <h2 className="text-center text-5xl font-bold mb-8">Social</h2>
        <div className="flex flex-col gap-5">
          <section className="flex justify-center gap-5 md:justify-evenly">
           <CardContact icon={<FaLinkedin size={50} color="#0A66C2"/>} text={'LinkedIn'}/>
           <CardContact icon={<VscGithubInverted size={50} color="#0A66C2"/>} text={'GitHub'}/>
           <CardContact icon={<PiReadCvLogoLight size={50} color="#0A66C2"/>} text={'CV'}/>
          </section>
          <section className="flex justify-center ">
          <CardContact icon={<MdOutlineMail size={50} color="#0A66C2"/>} text={'Example@Gmail.com'}/>
          </section>
        </div>
      </div>
  )
}
