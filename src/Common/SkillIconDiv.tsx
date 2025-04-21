import { ReactNode } from "react";

interface SkillProps {
  skill: ReactNode;
}

const SkillIconDiv = ({ skill }: SkillProps) => {
  return (
    <div className="p-2 rounded-lg normalBg fontMon  shadow-xl/20 overflow-hidden text-6xl">
      {skill}
    </div>
  );
};

export default SkillIconDiv;
