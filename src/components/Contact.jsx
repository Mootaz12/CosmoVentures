import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { contact } from "../constants";
const Contact = () => {
  return (
    <section id="Contact" className="bg-white py-16 px-24 ">
      <h2 className="text-black text-md font-poppins text-[48px] mb-10">
        Contact
      </h2>
      <p className="mb-10">{contact}</p>
      <div className="relative w-fit  ">
        <input
          type="text"
          placeholder="xyz@gmail.com"
          className="bg-orange outline-none  h-16 rounded-full p-4 placeholder-gray-600 font-semibold text-darkBlue text-lg"
        />
        <div className="absolute top-0 right-0  rounded-full bg-green h-16 p-5">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-darkBlue w-6  aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
