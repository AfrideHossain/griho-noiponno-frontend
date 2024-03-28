/* eslint-disable no-unused-vars */
// importing user css
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../User.css";
import { Link, useLoaderData } from "react-router-dom";

// importing essential icons
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { TbMoodSadSquint } from "react-icons/tb";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const EditUser = () => {
  const userProfile = useLoaderData();
  // destructure essentials from useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // get axiosSecure
  const axiosSecure = useAxiosSecure();

  // write function for handling form submission
  const submitHandler = (data) => {
    axiosSecure
      .patch("/users/updateuser", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="min-h-screen p-4">
      {/* user profile */}
      <form className="" onSubmit={handleSubmit(submitHandler)}>
        {/* profile information */}
        <div className="w-full grid md:grid-cols-3 gap-3">
          {/* profile picture and social media section */}
          <div className="space-y-3">
            <div className="infoCard flex flex-col items-center h-full md:h-full w-full">
              {/* user's profile picture */}
              <LazyLoadImage
                className="w-36 h-36 object-cover aspect-square rounded-full"
                src="https://i.ibb.co/SybN6T8/2017-emmastone-4600355e19cd442db005285754237096.webp"
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
                {/* cta buttons */}
                <div className="w-full flex justify-center items-center gap-2 mt-3">
                  <button type="submit" className="flex-grow btn btn-primary">
                    Save Changes
                  </button>
                  <button className="flex-grow btn btn-outline border-blue-500 text-blue-500 hover:btn-primary">
                    Change Picture
                  </button>
                </div>
              </div>
              {/* social links */}
              <div className="socialLinks overflow-x-auto">
                <h1 className="mb-5 !text-2xl border-b border-gray-400 pb-3">
                  Social Links
                </h1>
                <table className="table">
                  <tbody>
                    {/* Facebook */}
                    <tr className="max-w-full">
                      <td className="w-full">
                        <p>
                          <BsFacebook className="w-5 h-5" /> Facebook
                        </p>
                      </td>
                      <td className="input-td">
                        @{" "}
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${userProfile?.facebookID || "--"}`}
                          {...register("facebookID")}
                        />
                      </td>
                    </tr>
                    {/* Instagram*/}
                    <tr>
                      <td>
                        <p>
                          <FaInstagram className="w-5 h-5" /> Instagram
                        </p>
                      </td>
                      <td className="input-td">
                        @{" "}
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${userProfile?.instagramID || "--"}`}
                          {...register("instagramID")}
                        />
                      </td>
                    </tr>
                    {/* Twitter */}
                    <tr>
                      <td>
                        <p>
                          <FaTwitter className="w-5 h-5" /> Twitter
                        </p>
                      </td>
                      <td className="input-td">
                        @{" "}
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${userProfile?.twitterID || "--"}`}
                          {...register("twitterID")}
                        />
                      </td>
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
                  <tr className="">
                    <td>Full Name</td>
                    <td className="infoTableInputTd">
                      <input
                        type="text"
                        className="input-field"
                        placeholder={`${
                          userProfile?.fullName || "Enter your full name"
                        }`}
                        {...register("fullName")}
                      />
                    </td>
                  </tr>
                  {/* Email*/}
                  <tr>
                    <td>Email</td>
                    <td className="infoTableInputTd">
                      <input
                        type="text"
                        className="input-field"
                        placeholder={`${userProfile?.email}`}
                        // {...register("email")}
                      />
                    </td>
                  </tr>
                  {/* Phone */}
                  <tr>
                    <td>Phone</td>
                    <td className="infoTableInputTd">
                      <input
                        type="text"
                        className="input-field"
                        placeholder={`${
                          userProfile?.phone ||
                          "Your phone Number (e.g: +8801XXXXXXXXX )"
                        }`}
                        {...register("phone")}
                      />
                    </td>
                  </tr>
                  {/* Alt phone */}
                  <tr>
                    <td>Alt Phone</td>
                    <td className="infoTableInputTd">
                      <input
                        type="text"
                        className="input-field"
                        placeholder={`${
                          userProfile?.altPhone ||
                          "Your alternative phone Number (e.g: +8801XXXXXXXXX )"
                        }`}
                        {...register("altPhone")}
                      />
                    </td>
                  </tr>
                  {/* Date of birth */}
                  <tr>
                    <td>Date Of Birth</td>
                    <td className="infoTableInputTd">
                      <input
                        type="date"
                        className="input-field"
                        value={userProfile?.dob}
                        {...register("dob")}
                      />
                    </td>
                  </tr>
                  {/* NID */}
                  <tr>
                    <td>National ID</td>
                    <td className="infoTableInputTd">
                      <input
                        type="text"
                        className="input-field"
                        placeholder={`${
                          userProfile?.nid || "Your NID number(e.g: XXXXXXXXXX)"
                        }`}
                        {...register("nid")}
                      />
                    </td>
                  </tr>
                  {/* Payment method */}
                  <tr>
                    <td>Payment Method</td>
                    <td className="text-gray-200">COD</td>
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
                      <td className="infoTableInputTd">
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${
                            userProfile?.street || "77 Satmasjid Rd"
                          }`}
                          {...register("street")}
                        />
                      </td>
                    </tr>
                    {/* Email*/}
                    <tr>
                      <td>Post office</td>
                      <td className="infoTableInputTd">
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${userProfile?.postOffice || "Savar"}`}
                          {...register("postOffice")}
                        />
                      </td>
                    </tr>
                    {/* Alt phone */}
                    <tr>
                      <td>District</td>
                      <td className="infoTableInputTd">
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${userProfile?.district || "Dhaka"}`}
                          {...register("district")}
                        />
                      </td>
                    </tr>
                    {/* Date of birth */}
                    <tr>
                      <td>Division</td>
                      <td className="infoTableInputTd">
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${userProfile?.division || "Dhaka"}`}
                          {...register("division")}
                        />
                      </td>
                    </tr>
                    {/* NID */}
                    <tr>
                      <td>Country</td>
                      <td className="infoTableInputTd">
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${
                            userProfile?.country || "Bangladesh"
                          }`}
                          {...register("country")}
                        />
                      </td>
                    </tr>
                    {/* Payment method */}
                    <tr>
                      <td>Zip Code</td>
                      <td className="infoTableInputTd">
                        <input
                          type="text"
                          className="input-field"
                          placeholder={`${userProfile?.zip || "1230"}`}
                          {...register("zip")}
                        />
                      </td>
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
      </form>
    </div>
  );
};

export default EditUser;
