import Heading from "../../../Shared/Heading/Heading";
import SmallCard from "../../../Shared/SmallCard/SmallCard";

const PopularItems = () => {
  return (
    <div className="mx-auto md:mt-40 max-w-full p-4" style={{ width: "1280px" }}>
      <Heading title={"A Huge Collection Of Furnitures"} />
      <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-center md:justify-between">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default PopularItems;
