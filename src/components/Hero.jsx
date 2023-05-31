import { hero } from "../constants";
import CTA from "./CTA";
const Hero = () => {
  return (
    <section
      id="Home"
      className="bg-bgClr flex flex-col items-center  bg-opacity-80   py-24 px-24"
    >
      <div className="flex items-center">
        <div>
          <h2 className="text-[72px] text-white -mt-40 max-w-xl mb-5 ">
            {hero.heroTitle}
          </h2>

          <p className="text-white mb-16">{hero.heroSubTitle}</p>
          <CTA />
        </div>
        <img
          src={hero.heroImg}
          alt="rocket"
          className=" aspect-square w-[50%]"
        />
      </div>
      <p className="text-center text-white max-w-[700px] leading-10 ">
        {hero.heroParagraphe}
      </p>
    </section>
  );
};

export default Hero;
