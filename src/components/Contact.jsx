import { contact } from "../constants";
const Contact = () => {
  return (
    <section id="Contact" className="bg-white py-16 px-24 ">
      <h2 className="text-black text-md font-poppins text-[48px] mb-10">
        Contact
      </h2>
      <p className="mb-10">{contact}</p>
      <div className="relative">
        <input
          type="text"
          placeholder="xyz@gmail.com"
          className="bg-orange rounded-full p-4 placeholder-gray-800 font-semibold text-darkBlue text-lg"
        />
        <div className="absolute top-0 right-auto bg-green"></div>
      </div>
    </section>
  );
};

export default Contact;
