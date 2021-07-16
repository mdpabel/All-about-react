import React, { useEffect, useLayoutEffect, useRef } from "react";

const Chat = ({ message }) => {
  const containerRef = useRef();

  //   useEffect(() => {
  //     containerRef.current.scrollTop = containerRef.current.scrollHeight;
  //   });

  useLayoutEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });

  return (
    <div ref={containerRef} className="chat-box">
      {message.map((item) => (
        <div key={item.id}>
          <b className="author">{item.author} :</b>{" "}
          <span className="content">{item.content}</span>
        </div>
      ))}
    </div>
  );
};

export default Chat;
