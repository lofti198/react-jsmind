export const sampleString = `- Add your outliner text here. You can:
    - enter it 
    - or copy-paste
- Than switch to mindmap, where it is easy
    - to see the "whole picture" of information
    - to change text structure by dragging nodes
- Switch back to text mode and feel happier)`;

const sampleMindmapData = [
  { id: "root", isroot: true, topic: '<div id="20170919"></div>' },
  {
    id: "sub1",
    parentid: "root",
    topic: "sub1111" /*"background-color": "#0000ff"*/,
  },
  { id: "sub11", parentid: "sub1", topic: "sub11" },
  { id: "sub12", parentid: "sub1", topic: "sub12" },
  { id: "sub13", parentid: "sub1", topic: "sub13" },
  { id: "sub2", parentid: "root", topic: "sub2" },
  { id: "sub21", parentid: "sub2", topic: "sub21" },
  {
    id: "sub22",
    parentid: "sub2",
    topic: "sub22" /*"foreground-color": "#33ff33"*/,
  },
  { id: "sub3", parentid: "root", topic: "sub3" },
];
