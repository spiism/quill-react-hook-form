import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles.css";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("emailContent", { required: true, minLength: 11 });
  }, [register]);

  const onEditorStateChange = (editorState) => {
    setValue("emailContent", editorState);
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
      // handlers: { image: this.imageHandler },
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
  const test = ` <ol><li><strong><em><u>hom nay la 1 ngay binh thuong<span class="ql-cursor">﻿</span></u></em></strong></li></ol> `;

  const editorContent = watch("emailContent");
  return (
    <div className="App">
      <ReactQuill
        value={editorContent}
        onChange={onEditorStateChange}
        formats={formats}
        modules={modules}
      />
      <br />
      <br />
      <br />
      {/* <ReactQuill
        readOnly={true}
        value={editorContent}
        onChange={onEditorStateChange}
        formats={formats}
        modules={modules}
      />{" "} */}
      {/* <p className="Error">{errors.emailContent && "Enter valid content"}</p> */}
      <input type="submit" onClick={handleSubmit(onSubmit)} />
      <p>{editorContent}</p>
    </div>
  );
}

export default App;
