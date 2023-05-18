import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import styles from "../app/sidebar.module.css";
import Service from "../utils/Service";

function ContactBar({ state, setState }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const MAX_MESSAGE_LENGTH = 400;
  function handleChange(event) {
    const { value } = event.target;
    if (value.length <= MAX_MESSAGE_LENGTH) {
      setMessage(value);
    }
  }
  const remainingChars = MAX_MESSAGE_LENGTH - message.length;
  const charsLeftClass =
    remainingChars >= 0 ? "text-green-600" : "text-red-500";

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    try {
      const response = await Service.createContact(formData);
      alert("Contact sent successfully", response);
      setEmail(""),
        setFullName(""),
        setMessage(""),
        setPhoneNumber(""),
        setSubject("");
    } catch (err) {
      alert(err);
      err;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <div
      className={`fixed bottom-0 top-0 w-full overflow-y-auto bg-[#2d2f5a] p-2 text-center transition-all duration-500 ease-in-out md:w-[400px] lg:w-[400px] ${
        styles.sidebar
      } ${state ? "right-0 lg:right-0" : "-right-full"}`}
    >
      <div className="text-gray-100 py-4 text-xl">
        <div className="mt-1 flex justify-between p-2.5">
          <h1 className="text-2xl font-bold text-[#fff]">Contact Us</h1>
          <span onClick={() => setState(!state)}>
            <FiMinimize className="bi bi-x h-8 w-auto cursor-pointer  text-gray hover:scale-75" />
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mx-4 mt-8 ">
        <div className=" mb-8">
          <div className="mb-4 ">
            <label
              className="mb-2 block text-start text-lg  text-gray"
              htmlFor="Email"
            >
              Full Name
            </label>
            <input
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="Full Name"
              type="text"
              placeholder="Eg, Aayush Raj Joshi"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div className="mb-4 ">
            <label
              className="mb-2 block text-start text-lg  text-gray"
              htmlFor="Email"
            >
              Phone Number
            </label>
            <input
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="Phone Number"
              type="text"
              placeholder="Eg, 9818984104"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="mb-4 ">
            <label
              className="mb-2 block text-start text-lg  text-gray"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="Email"
              type="text"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4 ">
            <label
              className="mb-2 block text-start text-lg  text-gray"
              htmlFor="Subject"
            >
              Subject
            </label>
            <input
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="Subject"
              type="text"
              placeholder="Write your subject here..."
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className="mb-4 ">
            <label
              className="relative  mb-2 flex justify-between text-start  text-lg text-gray"
              htmlFor="Messagage"
            >
              Message
              <span className={` text-xs md:text-base ${charsLeftClass}`}>
                {remainingChars} characters left
              </span>
            </label>
            <textarea
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight placeholder:text-sm focus:outline-none"
              id="Message"
              type="text"
              rows={4}
              placeholder="Write your message here..."
              onChange={handleChange}
              value={message}
            />
            {remainingChars < 0 && (
              <p className="text-red-500">
                Please limit your message to 200 characters.
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            className=" focus:shadow-outline flex gap-2 rounded-full bg-[#0c66eea6]  px-6 py-2 text-white hover:bg-[#0c66ee] focus:outline-none"
            type="submit"
          >
            Submit
            <BiSend className=" text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactBar;
