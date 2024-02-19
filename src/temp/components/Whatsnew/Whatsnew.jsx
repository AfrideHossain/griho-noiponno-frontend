// importing essential icons form react icons
import { SlInfo } from "react-icons/sl";

// importing css
import "./Whatsnew.css";
import { Link } from "react-router-dom";

// date string
const dateString = new Date("2024-02-19");

const Whatsnew = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen p-4 flex flex-col justify-center items-center">
      <div className="relative border border-gray-600 px-10 py-5 rounded-xl">
        {/* learn more dropdown for user */}
        <div className="dropdown dropdown-end absolute right-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost btn-xs text-info"
          >
            <SlInfo className="w-5 h-5" />
          </div>
          <div
            tabIndex={0}
            className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
          >
            <div tabIndex={0} className="card-body">
              <p>
                Here, you{"'"}ll find the latest updates, freshest features, and
                trendiest additions to our ever-evolving world. From
                groundbreaking products to exciting announcements, consider this
                your front-row seat to all things cutting-edge and captivating.
              </p>
            </div>
          </div>
        </div>
        {/* header section */}
        <div className="space-y-3">
          <h1 className="w-full text-center text-4xl font-bold text-violet-700">
            What{"'"}s New
          </h1>
          <p className="text-center text-xl font-medium">
            Latest update till{" "}
            <span className="text-blue-600">
              {dateString.toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </p>
        </div>

        {/* list section */}
        <div className="flex flex-col items-center">
          <ol type="1" className="list-disc space-y-2 mt-10">
            <li>Navigation bar modified and side bar added.</li>
            <li>User dashboard route Modified</li>
            <li>
              User profile page added{" "}
              <Link className="link link-primary" to="/dashboard/user">
                Click here
              </Link>{" "}
              to visit.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Whatsnew;
