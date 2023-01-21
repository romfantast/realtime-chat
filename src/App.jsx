import React from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";
import "./App.css";
import { LoginForm } from "./components/LoginForm";

export const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="3a983424-25de-4a9f-a1a0-0be3577f8220"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
