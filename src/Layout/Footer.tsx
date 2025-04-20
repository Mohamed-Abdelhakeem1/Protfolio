import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import SocialDiv from "../Common/SocialDiv";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface SocialType {
  icon: ReactNode;
  Url: string;
}

const Footer = () => {
  const Socials: SocialType[] = [
    {
      icon: <FaFacebook />,
      Url: "https://www.facebook.com/mohamed.mado.5268/",
    },
    {
      icon: <FaLinkedin />,
      Url: "https://www.linkedin.com/in/mohamed-abdelhakeem-297147253/",
    },
    {
      icon: <FaGithub />,
      Url: "https://github.com/Mohamed-Abdelhakeem1",
    },
  ];

  return (
    <section className="container dark:text-blck text-whte text-center">
      <Link to="/" className="text-3xl font-bold fontRoma block">
        M.A.<span className="text-sm text-blue">dev</span>
      </Link>
      <div className="flexCenter gap-5 flex-wrap my-5">
        {Socials.length > 0 &&
          Socials.map((social, idx) => <SocialDiv key={idx} social={social} />)}
      </div>
      <p className="mt-4">Copyright © 2025 | All rights reserved</p>
    </section>
  );
};

export default Footer;
