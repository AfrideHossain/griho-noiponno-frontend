import { Link } from "react-router-dom";
import "../auth.css";

const SignUp = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="https://i.ibb.co/y6hR1Td/sofa-purple-living-room-with-copy-space.jpg"
        alt="Background image for login page"
        className="w-full h-full object-cover -z-10"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-0 flex justify-center items-center backdrop-blur-md">
        {/* form container */}
        <div className="w-full md:w-[1024px] relative flex items-start justify-between gap-10 rounded-2xl md:border md:border-gray-600 md:shadow-xl p-4 md:p-0">
          {/* Image section */}
          <div className="flex-grow form-side-image-section absolute top-0 left-0 -z-10 md:block hidden">
            <img
              src="https://i.ibb.co/dkwWBSC/kam-idris-Hq-HX3-LBN18-unsplash.jpg"
              alt="log in page image"
              className="form-image rounded-xl"
            />
          </div>

          {/* form section */}
          <div className="p-5 md:p-10 w-full md:w-auto h-full bg-gray-800 backdrop-blur-2xl ms-auto rounded-r-xl">
            {/* texts section */}
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-20">
                Griho Noiponno
              </h3>
            </div>
            <div className="w-full mb-5">
              <h2 className="text-3xl md:text-4xl font-medium">Join us </h2>
              <h1 className="text-5xl md:text-6xl font-extrabold">NOW!</h1>
            </div>
            <form className="form w-full space-y-3">
              <div className="input-section">
                <input type="text" placeholder="Username (E.g: johndoe)" />
              </div>
              <div className="input-section">
                <input
                  type="email"
                  placeholder="email (E.g: johndoe@email.com)"
                />
              </div>
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="btn btn-primary w-32 rounded-md"
                >
                  Sign up
                </button>
                <Link className="btn btn-outline w-32 rounded-md">Sign in</Link>
              </div>
            </form>
            {/* horizontal line */}
            <div className="flex items-center gap-3 w-full mt-5">
              <hr className="border border-gray-600 w-full" />
              <p className="text-gray-600">OR</p>
              <hr className="border border-gray-600 w-full" />
            </div>
            {/* social login  */}
            <div className="mt-5">
              <button className="w-full btn bg-white hover:bg-gray-300 text-gray-800">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="google icon"
                />
                <p>Sign in with google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
