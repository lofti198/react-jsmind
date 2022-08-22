import React from 'react';
import JSMindMM from "./components/JSMindMM";
import logo from "./logo.svg";
import "./App.css";
import 'jsmind/style/jsmind.css';

const mind = {
    "version": 1,
    "meta": {
        "name": "demo",
        "author": "hizzgdev@163.com",
        "version": "0.2",
    },
    "format": "node_array",
    "data": [
        { "id": "root", "isroot": true, "topic": '<div id="20170919"></div>' },
        { "id": "sub1", "parentid": "root", "topic": "sub1111111", "background-color": "#0000ff" },
        { "id": "sub11", "parentid": "sub1", "topic": "sub11" },
        { "id": "sub12", "parentid": "sub1", "topic": "sub12" },
        { "id": "sub13", "parentid": "sub1", "topic": "sub13" },
        { "id": "sub2", "parentid": "root", "topic": "sub2" },
        { "id": "sub21", "parentid": "sub2", "topic": "sub21" },
        { "id": "sub22", "parentid": "sub2", "topic": "sub22", "foreground-color": "#33ff33" },
        { "id": "sub3", "parentid": "root", "topic": "sub3" },
    ]
};
const options = {
    container: 'jsmind_container',
    theme: 'orange',
    editable: true,
    support_html: true,
    support_react: true,
};

function App() {
    const handleContextMenu = (e, jmnode) => {

    }
    const handleMouseDown = (e, jmnode) => {

    }
    const handleMouseUp = (e, jmnode) => {

    }
    const handleClick = (e, jmnode) => {

    }

    return (
        <>
            <JSMindMM
                mind={mind}
                options={options}
                styles={{ width: '1000px', height: '600px' }}
                onClick={handleClick}
                onContextMenu={handleContextMenu}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            />
        </>
    );
}

export default App;
