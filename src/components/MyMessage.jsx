import React from "react";

export const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message"
        className="image-images"
        style={{
          float: "right",
          width: "200px",
          height: "150px",
          marginRight: "20px",
        }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3b2a50",
      }}
    >
      {message.text}
    </div>
  );
};
