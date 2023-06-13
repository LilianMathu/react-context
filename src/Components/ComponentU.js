import React from "react";
import { UserConsumer } from "../context/UserContext";

const ComponentU = () => {
  return (
    <UserConsumer>
      {(username) => {
        return <div>Hello {username}</div>;
      }}
    </UserConsumer>
  );
};

export default ComponentU;
