import { ReactNode } from "react";

interface SkillProps {
  skill: ReactNode;
}

const SkillIconDiv = ({ skill }: SkillProps) => {
  return (
    <div className="p-2 rounded-xl normalBg normalText shadow-xl/20 overflow-hidden text-7xl">
      {skill}
    </div>
  );
};

export default SkillIconDiv;
