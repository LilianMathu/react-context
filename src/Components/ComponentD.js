import React, { useContext } from "react";
import ChannelContext from "../context/ChannelContext";
import UserContext from "../context/UserContext";

const ComponentD = () => {
  const channel = useContext(ChannelContext);

  const user = useContext(UserContext);
  return (
    <div>
      <p>
        I am {user} of {channel}
      </p>
    </div>
  );
};

export default ComponentD;
