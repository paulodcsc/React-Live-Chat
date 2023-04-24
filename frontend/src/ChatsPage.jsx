import { PrettyChatWindow } from "react-chat-engine-pretty";
import "./App.css";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="d8969a66-a976-4ba9-9c94-91e984635013"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
