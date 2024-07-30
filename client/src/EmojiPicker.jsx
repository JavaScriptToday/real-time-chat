import React, { useState, useRef, useEffect } from "react";
import Picker from "emoji-picker-react";

const EmojiPicker = ({ onEmojiClick }) => {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <button
        type="button"
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
        onClick={togglePicker}
      >
        😀
      </button>
      {showPicker && (
        <div className="absolute bottom-12 right-0 z-10">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
