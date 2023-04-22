import { BiLogInCircle, BiX } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import styles from "../app/sidebar.module.css";

function SignupBar({ state, setState }) {
  return (
    <div
      className={`fixed bottom-0 top-0 w-full overflow-y-auto bg-[#2d2f5a] p-2 text-center transition-all duration-500 ease-in-out md:w-[400px] lg:w-[400px] ${
        styles.sidebar
      } ${state ? "left-0 lg:left-0" : "-left-full"}`}
    >
      <div className="text-gray-100 py-4 text-xl">
        <div className="mt-1 flex justify-between p-2.5">
          <h1 className="text-2xl font-bold text-[#fff]">CopOfficial SignUp</h1>
          <span onClick={() => setState(!state)}>
            <FiMinimize className="bi bi-x h-8 w-auto cursor-pointer  text-gray hover:scale-75" />
          </span>
        </div>
      </div>
      <form className="mx-4 mt-8 t ">
        <div className=" mb-8">
          <div className=" flex gap-2">
            <div className="mb-4 ">
              <label
                className="mb-2 block text-start text-base text-gray"
                htmlFor=" Full Name"
              >
                First Name
              </label>
              <input
                className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
                id=" Full Name"
                type=" Full Name"
                placeholder="Eg, Aayush Raj"
              />
            </div>
            <div className="mb-4 ">
              <label
                className="mb-2 block text-start text-base  text-gray"
                htmlFor=" Full Name"
              >
                Last Name
              </label>
              <input
                className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
                id=" Full Name"
                type=" Full Name"
                placeholder="Eg, Joshi"
              />
            </div>
          </div>

          <div className="mb-4 ">
            <label
              className="mb-2 block text-start text-base  text-gray"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="Email"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-4 ">
            <label
              className="mb-2 block text-start text-base text-gray"
              htmlFor=" Full Name"
            >
              Phone Number
            </label>
            <input
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id=" Phone Number"
              type="Phone Number"
              placeholder="Eg, 9818984104"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-start  text-base text-gray"
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
          <div className="mb-6">
            <label
              className="mb-2 block text-start  text-base text-gray"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <a
            className="inline-block text-justify align-baseline text-sm text-gray hover:text-white"
            href="#"
          >
            By sign up you agree the terms and conditions.
          </a>
          <button
            className=" focus:shadow-outline flex gap-2 rounded-full bg-[#0c66eea6] px-6 py-2 text-white hover:bg-[#0c66ee] focus:outline-none"
            type="button"
          >
            SignUp
            <BiLogInCircle className=" text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupBar;
