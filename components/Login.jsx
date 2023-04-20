import { BiLogInCircle } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import styles from "../app/sidebar.module.css";

function LoginBar({ state, setState, toggleSignupBar }) {
  return (
    <div
      className={`fixed bottom-0 top-0 w-full overflow-y-auto bg-[#2d2f5a] p-2 text-center transition-all duration-500 ease-in-out md:w-[400px] lg:w-[400px] ${
        styles.sidebar
      } ${state ? "left-0 lg:left-0" : "-left-full"}`}
    >
      <div className="text-gray-100 py-4 text-xl">
        <div className="mt-1 flex justify-between p-2.5">
          <h1 className="text-2xl font-bold text-[#fff]">CopOfficial Login</h1>
          <span onClick={() => setState(!state)}>
            <FiMinimize className="bi bi-x h-8 w-auto cursor-pointer text-gray hover:scale-75" />
          </span>
        </div>
      </div>
      <form className="mx-4 mt-8 ">
        <div className=" mb-8">
          <div className="mb-4 ">
            <label
              className="mb-2 block text-start text-lg font-bold text-gray"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="text-gray-700  focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="Email"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-start  text-lg font-bold text-gray"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className=" focus:shadow-outline flex gap-2 rounded-full bg-[#0c66eea6] px-6 py-2 font-bold text-white hover:bg-[#0c66ee] focus:outline-none"
            type="button"
          >
            Login
            <BiLogInCircle className=" text-2xl" />
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-gray hover:text-white"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div className="mx-16  my-8">
        <div className=" mb-2 text-white">or</div>
        <div className="mb-4  h-[1px] bg-white"></div>

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
          Sign in with Google
        </button>
      </div>
      <div className="mx-4 my-8 flex justify-between md:mx-10">
        <div className="mb-2 text-white">Don&apos;t Have an Account?</div>
        <div
          onClick={toggleSignupBar}
          className="mb-2 cursor-pointer font-bold text-[#14b8a6]"
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default LoginBar;
