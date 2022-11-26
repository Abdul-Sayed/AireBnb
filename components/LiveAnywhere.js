import MediumCard from "./MediumCard";
import { v4 as uuidv4 } from "uuid";

const LiveAnywhere = ({ propertyTypes }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <ul className="flex space-x-3 overflow-scroll scrollbar-hide pb-3">
        {propertyTypes?.map((properties) => (
          <li key={uuidv4()}>
            <MediumCard
              img={properties[0].images[0]}
              type={properties[0].type}
              properties={properties}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LiveAnywhere;
