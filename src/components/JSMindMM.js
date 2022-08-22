import React, { useEffect } from "react";
import jm from "jsmind/js/jsmind";

const JSMindMM = ({
    mind,
    styles,
    options,
    onClick,
    onMouseUp,
    onMouseDown,
    onContextMenu
}) => {

    useEffect(() => {
        const jmm = new jm(options);
        jmm.show(mind);
    }, []);

    return (
        <div
            id="jsmind_container"
            // onClick={(e) => {
            //     const realSelectNode = new jm(options).getNode(e);
            //     onClick(e, realSelectNode);
            // }}
            // onMouseDown={(e) => {
            //     const realSelectNode = new jm(options).getNode(e);
            //     onMouseDown(e, realSelectNode);
            // }}
            // onMouseUp={(e) => {
            //     const realSelectNode = new jm(options).getNode(e);
            //     onMouseUp(e, realSelectNode);
            // }}
            // onContextMenu={(e) => {
            //     const realSelectNode = new jm(options).getNode(e);
            //     onContextMenu(e, realSelectNode);
            // }}
            style={styles}
        >
        </div>
    );
};

export default JSMindMM;
