import React from "react";
import styles from "./index.module.scss";

const UploadProgress = (props) => {
  const {
    fileName,
    progress,
    setShowProgress,
    isFail
  } = props;

  let myVar;

  const handleShowProgress = () => {
    setShowProgress(false);
  };

  const upload = () => {
    const bar = document.getElementById("progress_bar");
    if (bar && bar.style.width === "100%") {
      setTimeout(handleShowProgress, 3000);
    }
  };

  const myFunction = () => {
    myVar = setTimeout(upload, 100);
  };

  myFunction();

  const handleText = () => {
    if (isFail) {
      return `${fileName}上传失败`;
    }
    if (progress !== 100) {
      return `${fileName}上传中...${progress}%`;
    } else {
      return `${fileName}上传成功`;
    }
  };

  return (
    <div className={styles.fileupload_process}>
      <div className={styles.fileupload_progress_bar}>
        <div className={styles.fileupload_progress_text}>{handleText()}</div>
        <div className={styles.progress_bar_container}>
          <div
            style={{ width: `${progress}%` }}
            className={styles.progress_bar}
            id="progress_bar"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadProgress;
