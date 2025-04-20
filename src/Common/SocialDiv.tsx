import { SocialType } from "../Layout/Footer";

interface SocialDivProps {
  social: SocialType;
}

const SocialDiv = ({ social }: SocialDivProps) => {
  return (
    <a
      target="_blank"
      href={social.Url}
      className=" hover:text-blue smoothy text-4xl"
    >
      {social.icon}
    </a>
  );
};

export default SocialDiv;
