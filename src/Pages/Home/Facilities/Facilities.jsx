import Heading from "../../../Shared/Heading/Heading";

// importing icons from react icons
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";

// importing facilities css
import "./Facilities.css";

const Facilities = () => {
  return (
    <div className="facilities">
      <div className="facilities-items flex items-center justify-between gap-14 px-10 py-5 backdrop-blur-md rounded-xl mt-10">
        <div className="space-y-3">
          <LiaShippingFastSolid className="w-10 h-10" />
          <h2 className="block-head">Cash On Delivery</h2>
          <p className="block-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            facilis aut porro officia voluptatem excepturi itaque voluptate
            tempora aliquid illum.
          </p>
        </div>

        <div className="space-y-3">
          <MdCurrencyExchange className="w-10 h-10" />
          <h2 className="block-head">Save Money</h2>
          <p className="block-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            facilis aut porro officia voluptatem excepturi itaque voluptate
            tempora aliquid illum.
          </p>
        </div>

        <div className="space-y-3">
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
