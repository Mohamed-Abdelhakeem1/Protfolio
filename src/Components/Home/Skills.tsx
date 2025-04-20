import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import SkillIconDiv from "../../Common/SkillIconDiv";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skillsIcons = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaSass />,
    <FaBootstrap />,
    <RiTailwindCssFill />,
    <RiJavascriptFill />,
    <SiTypescript />,
    <FaReact />,
    <SiRedux />,
    <SiNextdotjs />,
    <FaGitAlt />,
  ];
  return (
    <section className="py-10">
      <div className="container text-blck dark:text-whte">
        <h3 className="heading text-blue fontRoma">Skills</h3>
        <div className="flexCenter gap-5 flex-wrap mt-8">
          {skillsIcons.length > 0 &&
            skillsIcons.map((skill, idx) => (
              <SkillIconDiv key={idx} skill={skill} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
