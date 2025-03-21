/**
 * @copyright 2024 PraveenSharrma
 * @license Apache-2.0
 */


const aboutItems = [

];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 px-7 pt-7 pb-3 rounded-2xl md:px-12 md:pt-12 md:pb-6 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-0 md:text-xl md:max-w-[74ch] text-justify leading-normal hyphens-auto">

          Welcome! I'm Praveen, a professional full-stack web developer with a passion for building visually stunning and highly functional websites and applications. Combining creativity with technical expertise, I specialize in designing intuitive user interfaces and developing robust back-end systems to create seamless digital experiences. From concept to deployment, I transform your vision into a polished, performance-driven masterpiece that excels in both design and functionality.          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About