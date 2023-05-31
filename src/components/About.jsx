import { aboutUs } from "../constants";
import { AboutUsCard } from "./index";
const About = () => {
  return (
    <section id="About US" className="bg-bgClr bg-opacity-80  py-16 px-24 ">
      <h2 className="text-white text-md font-poppins text-[48px] mb-10">
        About
      </h2>
      <div className="flex items-center gap-[200px]">
        <img
          src={aboutUs.aboutImg}
          alt="astonaut"
          className="w-[400px] aspect-auto"
        />
        <div className="flex flex-col gap-8">
          {aboutUs.aboutUsCards.map((card) => (
            <AboutUsCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
