import { BiLogInCircle } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import styles from "../../app/sidebar.module.css";
import Service from "../../utils/Service";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function SignupBar({ state, setState }) {
  const router = useRouter();
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState("");
  const handleRegister = (e) => {
    Service.register({ email, password, firstName, lastName, phoneNumber })
      .then((res) => {
        alert("SignUp Successfull");
        router.push("/");
      })
      .catch((err) => alert("Something went wrong"));
  };
  useEffect(() => {
    if (password && confirmpassword && password !== confirmpassword) {
      setMessage("Incorrect Password");
      return;
    }
    if (password && confirmpassword && password === confirmpassword) {
      setMessage("");
      return;
    }
    setMessage("");
  }, [confirmpassword, password]);

  const messageColor = message === "Password Matched" ? "teal" : "red";
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
      <form onSubmit={handleRegister} className="t mx-4 mt-8 ">
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
                type="text"
                required
                placeholder="Eg, Aayush Raj"
                onChange={(e) => setFname(e.target.value)}
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
                id=" Last Name"
                type="text"
                placeholder="Eg, Joshi"
                required
                onChange={(e) => setLname(e.target.value)}
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
              type="email"
              required
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
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
              type="text"
              required
              placeholder="Eg, 9818984104"
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              required
              onChange={(e) => setPassword(e.target.value)}
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
              id=" confirm password"
              type="password"
              placeholder="********"
              required
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
        </div>
        <div style={{ color: messageColor }}>{message}</div>{" "}
        <div className="flex items-center justify-between gap-4">
          <a
            className="inline-block text-justify align-baseline text-sm text-gray hover:text-white"
            href="#"
          >
            By sign up you agree the terms and conditions.
          </a>
          <button
            className=" focus:shadow-outline flex gap-2 rounded-full bg-[#0c66eea6] px-6 py-2 text-white hover:bg-[#0c66ee] focus:outline-none"
            type="submit"
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
