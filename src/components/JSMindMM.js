import React, { useEffect } from "react";

const JSMindMM = ({
    mind,
    styles,
    options
}) => {
    useEffect(() => {
        const jm = new window.jsMind(options);
        jm.show(mind);
    }, []);

    return (
        <div
            id="jsmind_container"
            style={styles}
        >
        </div>
    );
};

export default JSMindMM;

// this for future
// http://hizzgdev.github.io/jsmind/example/2_features.html