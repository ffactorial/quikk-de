import { Tabs } from "@geist-ui/react";
import React from "react";
import { HideOnMobile } from "./ResponsiveUtils";
import { useRouter } from "next/router";

const DesktopNavBar = ({ pathnames }) => {
  const router = useRouter();
  return (
    <HideOnMobile>
      <Tabs
        initialValue={router.pathname}
        value={router.pathname}
        onChange={(pathname) => router.push(pathname)}
        hideDivider
      >
        {Object.entries(pathnames).map(([key, value]) => (
          <Tabs.Item key={key} label={key} value={value} />
        ))}
      </Tabs>
    </HideOnMobile>
  );
};

export default DesktopNavBar;
