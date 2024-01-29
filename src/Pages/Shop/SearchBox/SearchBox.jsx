import { useEffect, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
const SearchBox = () => {
  const [searchString, setSerachString] = useState("");
  const handleSearchOnChange = (string) => {
    setSerachString(string);
  };
  useEffect(() => {
    if (searchString.length >= 3) {
      console.log(`Search string: ${searchString}`);
    }
  }, [searchString]);
  return (
    <div className="md:max-w-2xl mx-auto bg-white bg-opacity-10 border border-gray-600 flex h-14 rounded-full p-4">
      <input
        className="bg-transparent w-full h-ful border-none outline-none font-medium"
        type="text"
        name="searchString"
        placeholder="E.g: Table"
        onChange={(e) => {
          handleSearchOnChange(e.target.value);
        }}
      />
      <HiMiniMagnifyingGlass className="w-6 h-6" />
    </div>
  );
};

export default SearchBox;
