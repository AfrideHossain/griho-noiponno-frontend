import "../auth.css";
const Login = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="https://i.ibb.co/y6hR1Td/sofa-purple-living-room-with-copy-space.jpg"
        alt="Background image for login page"
        className="w-full h-full object-cover -z-10"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-0 flex justify-center items-center backdrop-blur-md">
        <div className="bg-gray-800 backdrop-blur-2xl max-w-4xl flex items-center justify-between gap-5">
          {/* Image section */}
          <div>
            <img
              src="https://i.ibb.co/dkwWBSC/kam-idris-Hq-HX3-LBN18-unsplash.jpg"
              alt="log in page image"
            />
          </div>

          {/* form section */}
          <div>
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
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
