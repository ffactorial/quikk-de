import { User } from "@geist-ui/react";
import React from "react";
import useIsMobile from "../hooks/useIsMobile";

const AlignedUser = ({ avatar, name, position }) => {
  const isMobile = useIsMobile();

  const style = { padding: 0 };

  return isMobile ? (
    <User src={avatar} name={name} style={style} />
  ) : (
    <User src={avatar} name={name} style={style}>
      {position}
    </User>
  );
};

export default AlignedUser;
