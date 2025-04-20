import { ThemeProps } from "../Types/ThemeType";

const ContactPage = ({ themeClass }: ThemeProps) => {
  return (
    <main className={`${themeClass} bodyBg pt-20`}>
      <section className="container h-[100vh] text-5xl normalText">
        If Not Now, When? Let’s Work Together!
      </section>
    </main>
  );
};

export default ContactPage;
