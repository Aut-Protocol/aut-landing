import { QAData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";
import { useEffect } from "react";
import { useState } from "react";
import { ExpandibleButtonTitle, ExpandibleButtonContent } from "./qa.styles";

const ExpandibleField = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ExpandibleButtonTitle
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        title here
      </ExpandibleButtonTitle>
      <ExpandibleButtonContent open={isOpen}>
        <div class="content">
          Welcome to Brackets, a modern open-source code editor that understands
          web design. It's a lightweight, yet powerful, code editor that blends
          visual tools into the editor so you get the right amount of help when
          you want it.
        </div>{" "}
        <div class="content">
          Welcome to Brackets, a modern open-source code editor that understands
          web design. It's a lightweight, yet powerful, code editor that blends
          visual tools into the editor so you get the right amount of help when
          you want it.
        </div>{" "}
        <div class="content">
          Welcome to Brackets, a modern open-source code editor that understands
          web design. It's a lightweight, yet powerful, code editor that blends
          visual tools into the editor so you get the right amount of help when
          you want it.
        </div>{" "}
        <div class="content">
          Welcome to Brackets, a modern open-source code editor that understands
          web design. It's a lightweight, yet powerful, code editor that blends
          visual tools into the editor so you get the right amount of help when
          you want it.
        </div>{" "}
        <div class="content">
          Welcome to Brackets, a modern open-source code editor that understands
          web design. It's a lightweight, yet powerful, code editor that blends
          visual tools into the editor so you get the right amount of help when
          you want it.
        </div>
      </ExpandibleButtonContent>
    </>
  );
};

export default ExpandibleField;
