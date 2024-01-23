import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const SmallCard = () => {
  return (
    <div className="w-fit rounded-md overflow-hidden">
      <div className="overflow-hidden">
        <motion.img
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-72"
          whileHover={{ scale: 1.2 }}
        />
      </div>
      <div className="bg-white bg-opacity-20 flex justify-between items-center p-3">
        <div className="space-y-2">
          <h2 className="text-white text-xl font-semibold">Wooden Chair</h2>
          <p className="font-medium">$500.00</p>
        </div>
        <Link>
          <FaCircleArrowRight className="w-5 h-5 relative hover:left-1" />
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
