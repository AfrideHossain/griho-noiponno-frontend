/* eslint-disable react/no-unescaped-entities */
// importing user css
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./User.css";
import { Link, useLoaderData } from "react-router-dom";

// importing essential icons
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { TbMoodSadSquint } from "react-icons/tb";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosNoAuth from "../../hooks/useAxiosNoAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

const topBarItems = (
  <>
    <li>
      <Link to="/">Cart</Link>
    </li>
    <li>
      <Link to="/">Purchase history</Link>
    </li>
  </>
);

const User = () => {
  // const userProfile = useLoaderData();
  const [userProfile, setUserProfile] = useState(useLoaderData());
  const [refetch, setRefetch] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // get axiosSecure and axiosNoAuth form hook
  const axiosSecure = useAxiosSecure();
  const axiosNoAuth = useAxiosNoAuth();

  // fetch user profile
  useEffect(() => {
    if (refetch) {
      axiosSecure.get("users/profile").then((res) => {
        setUserProfile(res.data);
        setRefetch(false);
      });
    }
  }, [axiosSecure, refetch, userProfile]);

  const imageUploadHandler = (imageInfo) => {
    // console.log(imageInfo);
    let formdata = new FormData();
    formdata.append("image", imageInfo.displayImage[0]);
    // do something with the image information
    axiosNoAuth
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_APIKEY
        }`,
        formdata
      )
      .then((res) => {
        const displayPicture = res.data.data.display_url;
        axiosSecure
          .patch("/users/updateuser", { displayPicture })
          .then((res) => {
            if (res.data.success) {
              reset();
              document.getElementById("changeImageModal").close();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Display picture updated successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              setRefetch(true);
            }
          });
      });
  };
  return (
    <div className="min-h-screen p-4">
      {/* user profile */}
      <div className="">
        {/* top bar */}
        {/* <div className="topbar">
          <ul className="list-none flex items-center gap-3 menu menu-horizontal">
            {topBarItems}
          </ul>
        </div> */}
        {/* profile information */}
        <div className="w-full grid md:grid-cols-3 gap-3">
          {/* profile picture and social media section */}
          <div className="space-y-3">
            <div className="infoCard flex flex-col items-center h-full md:h-full w-full">
              {/* user's profile picture */}
              <LazyLoadImage
                className="w-36 h-36 object-cover aspect-square border-2 rounded-full"
                // src="https://i.ibb.co/SybN6T8/2017-emmastone-4600355e19cd442db005285754237096.webp"
                src={userProfile?.displayPicture}
                placeholderSrc="/images/lazy_load/user.png"
                loading="lazy"
                alt="Display picture"
              />
              <div className="mt-5 flex flex-col items-center gap-2 max-h-48 text-center">
                <h1>{userProfile?.username || "--"}</h1>
                <p>{userProfile?.email || "--"}</p>
                <address>
                  {`${userProfile?.street || "--"}, ${
                    userProfile?.postOffice || "--"
                  }, ${userProfile?.district || "--"}, ${
                    userProfile?.division || "--"
                  }, ${userProfile?.country || "--"}, ${
                    userProfile?.zip || "--"
                  }`}
                </address>
                <div className="w-full flex justify-center items-center gap-2 mt-3">
                  <Link
                    to={"/dashboard/editprofile"}
                    className="flex-grow btn btn-primary"
                  >
                    Edit Profile
                  </Link>
                  <button
                    className="flex-grow btn btn-outline border-blue-500 text-blue-500 hover:btn-primary"
                    onClick={() =>
                      document.getElementById("changeImageModal").showModal()
                    }
                  >
                    Change Picture
                  </button>
                </div>
              </div>
              {/* social links */}
              <div className="socialLinks overflow-x-auto">
                <h1 className="mb-5 !text-2xl border-b border-gray-400 pb-3">
                  Social Links
                </h1>
                <table className="table table-xs">
                  <tbody>
                    {/* Facebook */}
                    <tr>
                      <td>
                        <p>
                          <BsFacebook className="w-5 h-5" /> Facebook
                        </p>
                      </td>
                      <td>@{userProfile?.facebookID || "--"}</td>
                    </tr>
                    {/* Instagram*/}
                    <tr>
                      <td>
                        <p>
                          <FaInstagram className="w-5 h-5" /> Instagram
                        </p>
                      </td>
                      <td>@{userProfile?.instagramID || "--"}</td>
                    </tr>
                    {/* Twitter */}
                    <tr>
                      <td>
                        <p>
                          <FaTwitter className="w-5 h-5" /> Twitter
                        </p>
                      </td>
                      <td>@{userProfile?.twitterID || "--"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* user's other information section  */}
          <div className="md:col-span-2 h-full">
            <div className="infoCard overflow-x-auto">
              <table className="table infoTable">
                <tbody>
                  {/* Full Name */}
                  <tr>
                    <td>Full Name</td>
                    <td>{userProfile?.fullName || "--"}</td>
                  </tr>
                  {/* Email*/}
                  <tr>
                    <td>Email</td>
                    <td>{userProfile?.email || "--"}</td>
                  </tr>
                  {/* Phone */}
                  <tr>
                    <td>Phone</td>
                    <td>{userProfile?.phone || "--"}</td>
                  </tr>
                  {/* Alt phone */}
                  <tr>
                    <td>Alt Phone</td>
                    <td>{userProfile?.altPhone || "--"}</td>
                  </tr>
                  {/* Date of birth */}
                  <tr>
                    <td>Date Of Birth</td>
                    <td>{userProfile?.dob || "--"}</td>
                  </tr>
                  {/* NID */}
                  <tr>
                    <td>National ID</td>
                    <td>{userProfile?.nid || "--"}</td>
                  </tr>
                  {/* Payment method */}
                  <tr>
                    <td>Payment Method</td>
                    <td>COD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mt-3">
              <div className="infoCard">
                <h1 className="mb-5">Shipping Address</h1>
                <table className="table infoTable">
                  <tbody>
                    {/* Full Name */}
                    <tr>
                      <td>Street</td>
                      <td>{userProfile?.street || "--"}</td>
                    </tr>
                    {/* Email*/}
                    <tr>
                      <td>Post office</td>
                      <td>{userProfile?.postOffice || "--"}</td>
                    </tr>
                    {/* Alt phone */}
                    <tr>
                      <td>District</td>
                      <td>{userProfile?.district || "--"}</td>
                    </tr>
                    {/* Date of birth */}
                    <tr>
                      <td>Division</td>
                      <td>{userProfile?.division || "--"}</td>
                    </tr>
                    {/* NID */}
                    <tr>
                      <td>Country</td>
                      <td>{userProfile?.country || "--"}</td>
                    </tr>
                    {/* Payment method */}
                    <tr>
                      <td>Zip Code</td>
                      <td>{userProfile?.zip || "--"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="infoCard">
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <TbMoodSadSquint className="w-40 h-40" />
                  <h1>There is Nothing in your cart</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image upload modal */}
      <dialog id="changeImageModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Change Display Picture!</h3>
          <p className="py-4 text-sm">
            Please make sure that the aspect ratio of the image is 1:1. It will
            be displayed on your profile page as a circle with a border around
            it.
          </p>
          <form className="w-full" onSubmit={handleSubmit(imageUploadHandler)}>
            <input
              type="file"
              className="file-input file-input-bordered file-input-info w-full "
              {...register("displayImage", { required: true })}
            />
            <div className="modal-action">
              <button className="btn btn-info" type="submit">
                {" "}
                Save
              </button>
              <button
                className="btn"
                type="button"
                onClick={() =>
                  document.getElementById("changeImageModal").close()
                }
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default User;
