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
              className="mb-2 block text-start text-lg text-gray"
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
              className="mb-2 block text-start  text-lg text-gray"
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
            className=" focus:shadow-outline flex gap-2 rounded-full bg-[#0c66eea6] px-6 py-2  text-white hover:bg-[#0c66ee] focus:outline-none"
            type="button"
          >
            Login
            <BiLogInCircle className=" text-2xl" />
          </button>
          <a
            className="inline-block align-baseline text-sm text-gray hover:text-white"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginBar;
