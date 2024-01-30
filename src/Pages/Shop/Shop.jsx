import SearchBox from "./SearchBox/SearchBox";
import SideBar from "./SideBar/SideBar";

const Shop = () => {
  return (
    <div className="md:max-w-7xl h-full p-4 mx-auto">
      <SearchBox />
      <div className="w-full h-full flex gap-10 justify-start items-start mt-20">
        <SideBar />
        Shop
      </div>
    </div>
  );
};

export default Shop;
