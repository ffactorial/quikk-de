import { Button, Popover, Text, useTheme } from "@geist-ui/react";
import { Menu } from "@geist-ui/react-icons";
import React, { useState } from "react";
import InternalLink from "../../misc/InternalLink";
import { ShowOnMobile } from "./ResponsiveUtils";

const MobileNavBar = ({ pathnames }) => {
  const theme = useTheme();

  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <ShowOnMobile>
      <Popover
        visible={navBarOpen}
        onVisibleChange={(visible) => setNavBarOpen(visible)}
        content={Object.entries(pathnames).map(([key, value]) => (
          <Popover.Item key={key} onClick={() => setNavBarOpen(false)}>
            <Text
              style={{ fontWeight: "normal", color: theme.palette.foreground }}
            >
              <InternalLink href={value}>{key}</InternalLink>
            </Text>
          </Popover.Item>
        ))}
        placement="bottomEnd"
        portalClassName="mobile-menu"
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
          <Menu color={theme.palette.foreground} />
        </Button>
      </Popover>
    </ShowOnMobile>
  );
};

export default MobileNavBar;
