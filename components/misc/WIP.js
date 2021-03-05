import { Note, Spacer } from "@geist-ui/react";
import React from "react";
import { MEDIUM_GAP } from "../../src/constants";

const WIP = () => {
  return (
    <>
      <Spacer y={MEDIUM_GAP} />
      <Note label="Hinweis">
        🚧 An diesem Abschnitt wird aktuell noch gearbeitet. 🚧
      </Note>
    </>
  );
};

export default WIP;
