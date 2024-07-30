import React from "react";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

const ChatBox = () => {
  return (
    <>
      <ChatMessages />
      <ChatInput />
    </>
  );
};

export default ChatBox;
