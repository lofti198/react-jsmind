import React, { useEffect, useRef, useState } from "react";
import { save } from "save-file";
import { parse } from "../libs/markdownParser";

const JSMindMM = ({ mind, styles, options }) => {
  const [showMap, setShowMap] = useState(false);
  const [text, setText] = useState("# 1");
  const jm = useRef();

  useEffect(() => {
    if (showMap) {
      jm.current = new window.jsMind(options);
      jm.current.show({
        ...mind,
        data: parse(text),
      });
    } else {
      if (jm.current) {
        console.log(jm.current, jm.current.mind.nodes.root);
        setText(convertMapToMd(jm.current.mind.nodes.root));
      } else {
        // setText("");
      }
      //;
    }

    // jm.current.mind.nodes.sub2.topic += "A";
    // console.log(jm.current.mind.nodes);
  }, [showMap]);

  function convertMapToMd(root) {
    let accumulator = "";
    const logNode = (node, level = 0) => {
      accumulator += `${"	".repeat(level)}- ${node.topic}\r\n`;
      // console.log(`${"	".repeat(level)}- ${node.topic}`);
      if (node.children) {
        const nextLevel = level + 1;
        for (let i = 0; i < node.children.length; i++) {
          logNode(node.children[i], nextLevel);
        }
      }
    };
    logNode(root);
    return accumulator;
    //console.log(jm.mind.nodes.root);
  }

  return (
    <>
      <div>
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
          <textarea
            rows="30"
            cols="100"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
      </div>
    </>
  );
};

export default JSMindMM;

// this for future
// http://hizzgdev.github.io/jsmind/example/2_features.html
