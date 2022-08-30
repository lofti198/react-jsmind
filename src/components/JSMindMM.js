import React, { useEffect, useRef, useState } from "react";

import { parse } from "../libs/commonParser";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { convertMapToMd } from "../libs/mapToMD";
import { sampleString } from "../data/data";

const JSMindMM = ({ mind, styles, options }) => {
  const [showMap, setShowMap] = useState(false);

  const [markdown, setMarkdown] = useState(sampleString);
  const jm = useRef();
  const $ref = useRef(null);

  useEffect(() => {
    const text = localStorage.getItem("text");
    if (text != null) setMarkdown(text);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const view = $ref.current?.editor.current?.view;
      console.log("in setTimeout: ", $ref.current);
      if (view) {
        console.log("view is defined");
        view.focus();
        view.dispatch(view.state.update({ selection: { anchor: 12 } }));
      }
    }, 2000);
  }, [$ref]);

  useEffect(() => {
    if (showMap) {
      jm.current = new window.jsMind(options);
      jm.current.show({
        ...mind,
        data: parse(markdown),
      });
    } else {
      if (jm.current) {
        setMarkdown(convertMapToMd(jm.current.mind.nodes.root));
      }
    }
  }, [showMap]);

  return (
    <>
      <div className="centered-content-block">
        <button
          onClick={() => {
            setShowMap((prev) => !prev);
          }}
        >
          {showMap ? "Switch to text" : "Switch to map"}
        </button>
      </div>
      <div>
        {showMap ? (
          <div id="jsmind_container" style={styles}></div>
        ) : (
          <MarkdownEditor
            ref={$ref}
            style={{ height: "100vh", overflow: "auto", padding: "8px" }}
            value={markdown}
            onChange={(value, viewUpdate) => {
              setMarkdown(value);
              localStorage.setItem("text", value);
            }}
            hideToolbar={false}
            onStatistics={(data) => {
              // main = data.selectionAsSingle;
              // console.log("data:", data.selectionAsSingle);
            }}
          />
        )}
      </div>
    </>
  );
};

export default JSMindMM;

// this for future
// http://hizzgdev.github.io/jsmind/example/2_features.html
