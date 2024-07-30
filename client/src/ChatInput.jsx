import React, { useState } from "react";
import { io } from "socket.io-client";
import EmojiPicker from "./EmojiPicker";

const socket = io("http://localhost:3000");

export const ChatInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chat message", message);
      setMessage("");
    }
  };

  const handleEmojiClick = (emoji, event) => {
    setMessage((prevMessage) => prevMessage + emoji.emoji);
  };

  return (
    <form onSubmit={sendMessage} className="flex items-center">
      <div className="m-2">
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="p-2 bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Send
      </button>
    </form>
  );
};
