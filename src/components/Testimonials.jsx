import { testimonialsCards } from "../constants";
import { TestimonilaCard } from "./index.js";
const Testimonials = () => {
  return (
    <section id="Testimonials" className=" bg-white py-16 px-24">
      <h1 className="text-black text-md font-poppins text-[48px] mb-10">
        Testimonaials
      </h1>
      <div className="grid-cols-1 lg:grid-cols-3 grid p-10 gap-4">
        {testimonialsCards.map((card) => (
          <TestimonilaCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
