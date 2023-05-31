/* eslint-disable react/prop-types */
const TestimonialCard = ({ card }) => {
  return (
    <div className="bg-grey p-5 rounded-md">
      <p>{card.text}</p>
      <p className=" text-right ">{`- ${card.author}`}</p>
    </div>
  );
};

export default TestimonialCard;
