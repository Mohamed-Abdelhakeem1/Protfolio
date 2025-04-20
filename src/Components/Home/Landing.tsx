const Landing = () => {
  return (
    <section>
      <div className="container flexCenter flex-col md:flex-row gap-12 md:gap-4 min-h-[95vh] text-blck dark:text-whte pt-2 pb-8 md:py-10">
        <div className="flex justify-center gap-4  flex-col">
          <p className="fontserif">Hi my name is:</p>
          <h2 className="fontRoma font-bold uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">
            Mohamed
            <br />
            Abdelhakeem
          </h2>
          <h3 className="fontRoma font-bold sm:text-lg md:text-xl lg:text-2xl">
            Frontend Engineer
          </h3>
          <p className="fontserif md:text-lg lg:text-xl">
            turning{" "}
            <span className="text-blue font-bold sm:text-xl md:text-2xl lg:text-2xl">
              ideas
            </span>{" "}
            into real life{" "}
            <span className="text-blue font-bold sm:text-xl md:text-2xl lg:text-2xl">
              products
            </span>{" "}
            is my calling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
