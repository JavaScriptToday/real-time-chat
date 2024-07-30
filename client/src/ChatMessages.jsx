import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export const ChatMessages = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-64 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-lg">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-2 mb-2 rounded-lg text-left ${
            index % 2 === 0 ? "bg-blue-100" : "bg-indigo-300"
          }`}
        >
          {msg}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
