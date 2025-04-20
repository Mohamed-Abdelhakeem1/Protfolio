import { ThemeProps } from "../Types/ThemeType";

const AboutPage = ({ themeClass }: ThemeProps) => {
  return (
    <main className={`${themeClass} bodyBg pt-20`}>
      <section className="container h-[100vh] text-5xl normalText">
        Welcome to my about page
      </section>
    </main>
  );
};

export default AboutPage;
