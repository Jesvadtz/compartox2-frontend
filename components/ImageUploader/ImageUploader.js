import React from "react";
import { FileUploader } from "react-drag-drop-files";
import ImagePreviewCard from "../ImagePreviewCard";
import UploaderImage from "../UploaderImage";
import styles from "../ArticleForm/ArticleForm.module.scss";

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
    <div className={styles.articleUploader}>
      <div className={styles.articleFiles}>
        {files.length > 0 &&
          files.map((f) => (
            <ImagePreviewCard
              src={URL.createObjectURL(f)}
              name={f.name}
              onDelete={() => handleRemove(f)}
              key={`${f.name}${f.lastModified}`}
            />
          ))}
      </div>
      <FileUploader
        handleChange={handleAdd}
        name="file"
        types={fileTypes}
        fileOrFiles={null}
        multiple
      >
        <UploaderImage />
      </FileUploader>
    </div>
  );
};

export default ImageUploader;
