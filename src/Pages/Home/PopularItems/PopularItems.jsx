import Heading from "../../../Shared/Heading/Heading";
import SmallCard from "../../../Shared/SmallCard/SmallCard";

const PopularItems = () => {
  return (
    <div className="mx-auto mt-40" style={{ width: "1280px" }}>
      <Heading title={"A Huge Collection Of Furnitures"} />
      <div className="w-full grid grid-cols-4 gap-5 items-center justify-between">
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
