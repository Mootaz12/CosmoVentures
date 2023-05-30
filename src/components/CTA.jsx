import { btnText } from "../constants";
const CTA = () => {
  return (
    <button
      type="button"
      className=" rounded-md p-4 font-semibold bg-orange font-Orbitron text-darkBlue"
    >
      {btnText}
    </button>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
