import "./banner.css";

// importing framer motion
import { motion } from "framer-motion";

// const variants = {
//   animate: {
//     y: [-20, 20],
//     rotate: 0,
//     transition: {
//       delay,
//       duration: 2,
//       repeat: Infinity,
//       // repeatDelay: 0.2,
//       repeatType: "reverse",
//     },
//   },
//   hover: {},
// };

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="bannerTextsSection">
          <h1>Your Home Interior Solution</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            officia dolorum ducimus accusantium est, qui totam voluptatum, quasi
            ad possimus autem maiores aspernatur quas inventore a unde
            voluptatem quidem libero?
          </p>
          <button>Shop Now</button>
        </div>
        <div className="bannerImgSection">
          <motion.img
            src="https://i.ibb.co/x2Y3M4k/1521.jpg"
            animate={{
              y: [-20, 20],
              rotate: 0,
              transition: {
                delay: 0.9,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://i.ibb.co/m0NPgXf/mock-up-frame-cabinet-1.jpg"
            animate={{
              y: [-20, 20],
              rotate: 0,
              transition: {
                delay: 0.6,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://i.ibb.co/PFWRPQG/wooden-plant-shelf-with-mixed-plants-1.jpg"
            animate={{
              y: [-20, 20],
              rotate: 0,
              transition: {
                delay: 0.3,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
