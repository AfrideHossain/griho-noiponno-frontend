import "./banner.css";

// importing framer motion
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="banner z-1">
        <div className="bannerTextsSection" data-aos="fade-right">
          <h1>Your Home Interior Solution</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            officia dolorum ducimus accusantium est, qui totam voluptatum, quasi
            ad possimus autem maiores aspernatur quas inventore a unde
            voluptatem quidem libero?
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="bannerImgSection" data-aos="fade-left">
          <motion.img
            src="https://i.ibb.co/x2Y3M4k/1521.jpg"
            animate={{
              y: [-20, 20],
              rotate: 0,
              transition: {
                delay: 0.9,
                duration: 1.5,
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
                duration: 1.5,
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
                duration: 1.5,
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
