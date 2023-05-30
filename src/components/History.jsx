import { historyParagraphe } from "../constants";
const History = () => {
  return (
    <section id="History" className="bg-white flex flex-col py-16 px-24 ">
      <h2 className="text-black text-md font-poppins text-[48px] mb-10">
        History
      </h2>
      <p className="max-w-[800px] text-[20px] font-poppins">
        {historyParagraphe}
      </p>
    </section>
  );
};

export default History;
