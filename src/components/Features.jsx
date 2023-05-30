import { featuresCards } from "../constants";
import { FeatureCard, CTA } from "./index";

const Features = () => {
  return (
    <section id="Features" className="bg-bgClr bg-opacity-80  py-16 px-24  ">
      <h2 className="text-white text-md font-poppins text-[48px] mb-10">
        Features
      </h2>
      <div className="flex gap-6 mb-16">
        {featuresCards.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
      <div className="">
        <CTA />
      </div>
    </section>
  );
};

export default Features;
