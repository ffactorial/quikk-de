import { Tabs } from "@geist-ui/react";
import React from "react";
import { useRouter } from "next/router";

const DesktopNavBar = ({ pathnames }) => {
  const router = useRouter();

  const pathnameValues = Object.values(pathnames);

  if (router.pathname !== "/") {
    pathnameValues.splice(pathnameValues.indexOf("/"), 1);
  }

  const currentActivePathname = pathnameValues.find((pathname) =>
    router.pathname.startsWith(pathname)
  );

  return (
    <Tabs
      initialValue={router.pathname}
      value={currentActivePathname ?? router.pathname}
      onChange={(pathname) => router.push(pathname)}
      hideDivider
    >
      {Object.entries(pathnames).map(([key, value]) => (
        <Tabs.Item key={key} label={key} value={value} />
      ))}
    </Tabs>
  );
};

export default DesktopNavBar;
