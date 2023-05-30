/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AboutUsCard = ({ card }) => {
  return (
    <div>
      <div className="flex items-center gap-5 text-xl font-semibold">
        <FontAwesomeIcon icon={faArrowRight} className="text-darkBlue" />
        <h3 className="text-white">{card.title}</h3>
      </div>
      <p className="max-w-[70%] mt-4 text-white">{card.text}</p>
    </div>
  );
};

export default AboutUsCard;
