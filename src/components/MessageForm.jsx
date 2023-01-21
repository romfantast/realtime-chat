import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

export const MessageForm = (props) => {
  const { chatId, creds } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length) {
      sendMessage(creds, chatId, { text });
    }
    setValue("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    isTyping(props, chatId);
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
          <input
            type="file"
            multiple={false}
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
        </span>
      </label>

      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};
