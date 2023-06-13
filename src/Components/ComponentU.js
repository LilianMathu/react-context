import React from "react";
import { UserConsumer } from "../context/UserContext";
import { ChannelConsumer } from "../context/ChannelContext";

const ComponentU = () => {
  return (
    <div>
      <UserConsumer>
        {(username) => {
          return (
            <ChannelConsumer>
              {(channel) => {
                return (
                  <div>
                    Hello {username} of {channel}
                  </div>
                );
              }}
            </ChannelConsumer>
          );
        }}
      </UserConsumer>
    </div>
  );
};

export default ComponentU;
