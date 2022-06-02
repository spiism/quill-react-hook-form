import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles.css";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";

// class CustomQuill extends ReactQuill {
//   destroyEditor() {
//     if (!this.editor) return;
//     this.unhookEditor(this.editor);
//   }
// }

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("content", { required: true, minLength: 11 });
  }, [register]);

  const onEditorStateChange = (editorState) => {
    setValue("content", editorState);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: ["small", false, "large", "huge"] }, { color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          { align: [] },
        ],
        ["link", "image", "video"],
        ["clean"],
      ],
    },
    clipboard: { matchVisual: false },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "size",
    "color",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
  ];
  const test = ` <h1><strong><u>jghdfjkghjfdkhgjkfdhgjkfdhgj</u></strong></h1> `;

  const editorContent = watch("content");
  return (
    <div className="App">
      <ReactQuill
        value={test}
        onChange={onEditorStateChange}
        formats={formats}
        modules={modules}
      />
      <br />
      <br />
      <br />
      <ReactQuill
        readOnly={true}
        value={editorContent}
        onChange={onEditorStateChange}
        formats={formats}
        modules={modules}
      />{" "}
      {/* <p className="Error">{errors.emailContent && "Enter valid content"}</p> */}
      <input type="submit" onClick={handleSubmit(onSubmit)} />
      <p>{editorContent}</p>
    </div>
  );
}

export default App;
