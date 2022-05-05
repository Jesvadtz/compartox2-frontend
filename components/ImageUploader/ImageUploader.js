import React from "react";
import { FileUploader } from "react-drag-drop-files";
import ImagePreviewCard from "../ImagePreviewCard";

const fileTypes = ["JPG", "JPEG", "PNG"];

const ImageUploader = ({ files, setFiles }) => {
  console.log("files: ", files);
  const handleAdd = (newFiles) => {
    console.log("newFiles", newFiles);
    setFiles([...files, ...newFiles]);
  };
  const handleRemove = (file) => {
    setFiles(
      files.filter(
        (f) => f.name !== file.name && f.lastModified !== file.lastModified
      )
    );
  };

  return (
    <div>
      {files.length > 0 &&
        files.map((f) => (
          <ImagePreviewCard
            src={URL.createObjectURL(f)}
            name={f.name}
            onDelete={() => handleRemove(f)}
            key={`${f.name}${f.lastModified}`}
          />
        ))}
      <FileUploader
        handleChange={handleAdd}
        name="file"
        types={fileTypes}
        fileOrFiles={null}
        multiple
      />
    </div>
  );
};

export default ImageUploader;
