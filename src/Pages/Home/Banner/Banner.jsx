import "./banner.css";

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
          <img src="https://i.ibb.co/x2Y3M4k/1521.jpg" />
        </div>
      </div>
    </>
  );
};

export default Banner;
