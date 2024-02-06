// import ErrorImg from "/images/error_img/3828537.jpg";
import { Link } from "react-router-dom";
import ErrorImg from "/images/error_img/5333349.png";
const ErrorElement = () => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto p-4 flex flex-col justify-center items-center">
      <img src={ErrorImg} alt="" className="aspect-square max-w-md" />
      <div className="max-w-2xl flex flex-col items-center">
        <h2 className="text-7xl mb-6 font-bold">Oops!</h2>
        <p className="text-lg font-medium text-center">
          Power outage in the digital realm! Looks like someone forgot to pay
          the electricity bill for this webpage. Time to flip the virtual
          circuit breaker and see if it sparks back to life.
        </p>
        <Link to="/" className="btn btn-lg bg-purple-500 px-10 text-white mt-8">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
