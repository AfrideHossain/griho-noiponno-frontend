// importing icons from react icons
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";

// importing facilities css
import "./Facilities.css";

const Facilities = () => {
  return (
    <div className="facilities">
      <div className="facilities-items flex md:flex-row flex-col items-center justify-between md:gap-14 gap-0 px-10 md:py-5 py-0 backdrop-blur-md rounded-xl mt-10 divide-y divide-gray-600">
        <div className="space-y-3 py-5">
          <LiaShippingFastSolid className="w-10 h-10" />
          <h2 className="block-head">Cash On Delivery</h2>
          <p className="block-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            facilis aut porro officia voluptatem excepturi itaque voluptate
            tempora aliquid illum.
          </p>
        </div>

        <div className="space-y-3 py-5">
          <MdCurrencyExchange className="w-10 h-10" />
          <h2 className="block-head">Save Money</h2>
          <p className="block-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            facilis aut porro officia voluptatem excepturi itaque voluptate
            tempora aliquid illum.
          </p>
        </div>

        <div className="space-y-3 py-5">
          <LuMessagesSquare className="w-10 h-10" />
          <h2 className="block-head">Contact With Us</h2>
          <p className="block-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            facilis aut porro officia voluptatem excepturi itaque voluptate
            tempora aliquid illum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
