import { BiLogInCircle, BiX } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import styles from "../app/sidebar.module.css";

function SignupBar({ state, setState }) {
  return (
    <div
      className={`fixed top-0 bottom-0 p-2 w-full md:w-[400px] lg:w-[400px] overflow-y-auto text-center bg-[#2d2f5a] transition-all ease-in-out duration-500 ${
        styles.sidebar
      } ${state ? "lg:left-0 left-0" : "-left-full"}`}
    >
      <div className="text-gray-100 text-xl py-4">
        <div className="p-2.5 mt-1 flex justify-between">
          <h1 className="text-[#fff] text-2xl font-bold">CopOfficial SignUp</h1>
          <span onClick={() => setState(!state)}>
            <FiMinimize className="bi hover:scale-75 text-gray bi-x cursor-pointer  w-auto h-8" />
          </span>
        </div>
      </div>
      <form className="mx-4 mt-8 ">
        <div className=" mb-8">
          <div className="mb-4 ">
            <label
              className="block text-gray text-lg text-start font-bold mb-2"
              htmlFor=" Full Name"
            >
              Full Name
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=" Full Name"
              type=" Full Name"
              placeholder="Eg, Aayush Raj Joshi"
            />
          </div>

          <div className="mb-4 ">
            <label
              className="block text-gray text-lg text-start font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-4 ">
            <label
              className="block text-gray text-lg text-start font-bold mb-2"
              htmlFor=" Full Name"
            >
              Phone Number
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=" Phone Number"
              type="Phone Number"
              placeholder="Eg, 9818984104"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray text-start  text-lg font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray text-start  text-lg font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <a
            className="inline-block align-baseline text-justify font-bold text-sm text-gray hover:text-white"
            href="#"
          >
            By sign up you agree the terms and conditions.
          </a>
          <button
            className=" flex gap-2 bg-[#0c66eea6] hover:bg-[#0c66ee] text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            SignUp
            <BiLogInCircle className=" text-2xl" />
          </button>
        </div>
      </form>
      <div className="my-8  mx-16">
        <div className=" mb-2 text-white">or</div>
        <div className="mb-4  bg-white h-[1px]"></div>

        <button className="bg-gray-200 flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke p-4 text-gray hover:bg-white hover:text-black  ">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_191_13499)">
                <path
                  d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                  fill="#4285F4"
                />
                <path
                  d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                  fill="#34A853"
                />
                <path
                  d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                  fill="#EB4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_191_13499">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default SignupBar;
