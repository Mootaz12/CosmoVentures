/* eslint-disable react/prop-types */
const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-grey p-5 rounded-md">
      <div className="flex gap-4 mb-4 ">
        <img
          src={feature.icon}
          alt={feature.name}
          className="w-[30px] aspect-square"
        />
        <h3 className="font-semibold">{feature.name}</h3>
      </div>
      <p>{feature.description} </p>
    </div>
  );
};

export default FeatureCard;
