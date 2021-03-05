import { Button, Popover } from "@geist-ui/react";
import { Menu } from "@geist-ui/react-icons";
import React, { useState } from "react";
import InternalLink from "../../misc/InternalLink";
import { ShowOnMobile } from "./ResponsiveUtils";

const MobileNavBar = ({ pathnames }) => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <ShowOnMobile>
      <Popover
        visible={navBarOpen}
        onVisibleChange={(visible) => setNavBarOpen(visible)}
        content={Object.entries(pathnames).map(([key, value]) => (
          <Popover.Item key={key} onClick={() => setNavBarOpen(false)}>
            <InternalLink href={value}>{key}</InternalLink>
          </Popover.Item>
        ))}
        placement="bottomEnd"
        hideArrow
      >
        <Button
          auto
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setNavBarOpen(!navBarOpen)}
        >
          <Menu />
        </Button>
      </Popover>
    </ShowOnMobile>
  );
};

export default MobileNavBar;
