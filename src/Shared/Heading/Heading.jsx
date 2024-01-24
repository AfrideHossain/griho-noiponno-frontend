// importing react prop-type
import PropTypes from "prop-types";

const Heading = ({ title }) => {
  return (
    <div className="max-w-full text-2xl md:text-4xl font-bold text-center text-white my-10">{title}</div>
  );
};

// prop validation rules
Heading.propTypes = {
  title: PropTypes.string,
};
export default Heading;
