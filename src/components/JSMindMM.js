import React, { useEffect, useRef, useState } from "react";
import { save } from 'save-file';

const JSMindMM = ({
    mind,
    styles,
    options
}) => {
    const jm = useRef();

    useEffect(() => {
        jm.current = new window.jsMind(options)
        jm.current.show(mind);
    }, [jm]);

    return (
        <>
            <button onClick={async () => {
                const { data } = jm.current.get_data('node_tree')
                await save(JSON.stringify(jm.current.get_data('node_tree')), 'jsmind.json')
            }}>
                get data
            </button>
            <div
                id="jsmind_container"
                style={styles}
            >
            </div>
        </>
    );
};

export default JSMindMM;

// this for future
// http://hizzgdev.github.io/jsmind/example/2_features.html