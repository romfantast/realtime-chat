import React from "react";

export const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message"
          className="image-images"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
            backdropColor: "#cabcdc",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};
