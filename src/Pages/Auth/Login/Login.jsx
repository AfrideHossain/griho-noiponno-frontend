import "../auth.css";
const Login = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="https://i.ibb.co/y6hR1Td/sofa-purple-living-room-with-copy-space.jpg"
        alt="Background image for login page"
        className="w-full h-full object-cover -z-10"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-0 flex justify-center items-center">
        <div className="border rounded-md p-4 bg-white bg-opacity-10 backdrop-blur-2xl">
          <div className="form w-full space-y-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
