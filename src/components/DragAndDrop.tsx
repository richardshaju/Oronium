"use client";

import { useRef, useState } from "react";
import FileUpload from "../../public/icons/FileUpload";
import { MdOutlineDelete } from "react-icons/md";

export default function DragAndDrop() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

  function handleSubmitFile(e: any) {
    if (files.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className={`${dragActive ? "border-[#C63E4A] " : "border-[#29384B66]"} flex overflow-hidden items-center justify-center w-[472px] h-[118px] rounded-[8px] border  gap-2 border-dashed`}>
      <form
        className={`${
          dragActive ? "bg-[#f5f5f5]" : "bg-white"
        } w-full h-full  flex items-center justify-center`}
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          onChange={handleChange}
          accept="image/*,"
        />
        {files.length == 0 ? (
          <span onClick={openFileExplorer} className="cursor-pointer">
            <FileUpload />
          </span>
        ) : null}
        
        <div className="flex flex-col items-center p-3">
          {files.map((file: any, idx: any) => (
            <div key={idx} className="flex flex-col urbanist text-[#29384BCC] font-[600] items-center">
              <span>{file.name}</span>
              <span
                className="ml-0 cursor-pointer"
                onClick={() => removeFile(file.name, idx)}
              >
                <MdOutlineDelete size={20} />
              </span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
