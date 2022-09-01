import React, { useEffect } from 'react';
import MarkdownEditor from "@uiw/react-markdown-editor";

const Editor = ({ editorRef, markdown, setMarkdown }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            const view = editorRef.current?.editor.current?.view;
            console.log(view);
            if (view) {
                view.focus();
                view.dispatch(view.state.update({ selection: { anchor: 18 } }));
            }
        }, 200);

        return () => clearTimeout(timeout)
    }, [editorRef]);

    return (
        <MarkdownEditor
            ref={editorRef}
            style={{ height: "100vh", overflow: "auto", padding: "8px" }}
            value={markdown}
            onChange={(value, viewUpdate) => {
                setMarkdown(value);
                localStorage.setItem("text", value);
            }}
            hideToolbar={false}
        />
    )
}

export default Editor;