import { FiX } from "react-icons/fi";
import styles from "../../../app/sidebar.module.css";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import UserOne from "../../../public/assets/user/user-01.png";
import UserTwo from "../../../public/assets/user/user-02.png";
function ChatBar({ state, setState, toggleSignupBar }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatboxRef = useRef(null);
  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div
      className={` fixed bottom-4 z-99 w-auto overflow-y-auto rounded-2xl bg-strokedark p-2 text-center transition-all duration-500 ease-in-out md:w-[400px] lg:w-[350px]  ${
        styles.sidebar
      } ${state ? "right-0 lg:right-10" : "-right-full"}`}
    >
      <div className="text-gray-100 pst-2 text-xl">
        <div className="mt-1 flex justify-between p-2.5">
          <h1 className="text-xl font-bold text-[#fff]">Live Enquiry</h1>
          <span onClick={() => setState(!state)}>
            <FiX className="bi bi-x h-8 w-auto cursor-pointer text-gray hover:scale-75" />
          </span>
        </div>
      </div>

      <div className="flex h-[350px] flex-col ">
        <div
          className={`h-500 flex-1 overflow-y-auto p-4 border border-white rounded-xl mx-4 ${styles.sidebar}`}
          ref={chatboxRef}
        >
          <div className="flex flex-col">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`my-2 flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-end ${
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                    {index % 2 === 0 ? (
                      <Image src={UserOne} alt="User" />
                    ) : (
                      <Image src={UserTwo} alt="User" />
                    )}
                  </div>
                  <div
                    className={`ml-2 rounded-lg px-4 py-2 ${
                      index % 2 === 0
                        ? "bg-green-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {message}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center p-4">
          <input
            type="text"
            placeholder="Type your message here"
            className="border-gray-400 focus:border-blue-500 mr-4 flex-1 rounded-lg p-2 focus:outline-none focus:ring"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleSendMessage();
              }
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:border-blue-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBar;
