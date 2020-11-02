import React, { useEffect, useState } from "react";
import { UploadProgress } from "../../component"
import { NavLink } from 'react-router-dom';
import styles from "./index.module.scss";
// const styles = require("./index.module.scss") 

const FileUpload = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState({ name: "" });

  //ajax调取接口，上传文件部分的逻辑
  // const watchUploadProgress = useCallback(
  //   (files) => {
  //     //创建xhr
  //     const xhr = new XMLHttpRequest();
  //      const url = "test/demo/uploadfiles";
  //     //FormData对象
  //     const fd = new FormData();
  //     fd.append("file", files[0]);
  //     // 上传成功要处理的部分
  //     xhr.onreadystatechange = function() {
  //       if (xhr.readyState === 4 && xhr.status === 200) {
  //         update()
  //       }
  //     };
  //     // 上传失败处理
  //     xhr.upload.onerror = function(evt) {
  //       window.console.log(evt);
  //     };
  //     //上传进度监听，进度条百分比样式部分
  //     xhr.upload.onprogress = function(evt) {
  //       if (evt.lengthComputable) {
  //         const percentComplete = Math.round((evt.loaded * 100) / evt.total);
  //         setProgress(percentComplete);
  //       }
  //     };
  //     xhr.open("POST", url, true);
  //     xhr.send(fd);
  //   },
  //   [update]
  // );
  const handleProgressPercent = () => {
    setProgress((percentComplete) => percentComplete < 95 ? percentComplete + 5 : 100);
  }
  const virtualWatch = () => {
    setInterval(handleProgressPercent, 1000);
  }

  //处理上传文件
  const handleUploadFile = (newFile: any) => {
    const fileDom = document.getElementById("clickFile");
    // watchUploadProgress(newFile);
    setShowProgress(true);
    virtualWatch();
    setFile(newFile[0]);
    // fileDom.value = null;
  };

  useEffect(() => {
    const uploadArea = document.getElementById("drop_area");

    //鼠标拖拽进入该区域
    uploadArea?.addEventListener(
      "dragenter",
      function () {
        uploadArea.style.border = "1px solid #204fc5";
        uploadArea.style.backgroundColor = "#eef5fc";
      },
      false
    );

    //鼠标拖拽离开该区域
    uploadArea?.addEventListener(
      "dragleave",
      function () {
        uploadArea.style.border = "1px solid #eee";
        uploadArea.style.backgroundColor = "#eee";
      },
      false
    );

    //只要鼠标拖拽悬停在该区域就会触发
    uploadArea?.addEventListener(
      "dragover",
      function (e) {
        e.preventDefault();
        uploadArea.style.border = "1px solid #204fc5";
        uploadArea.style.backgroundColor = "#eef5fc";
      },
      false
    );

    //鼠标拖拽释放
    uploadArea?.addEventListener("drop", function (e) {
      e.preventDefault();
      uploadArea.style.border = "1px solid #eee";
      uploadArea.style.backgroundColor = "#eee";
      // watchUploadProgress(e.dataTransfer.files);
      setShowProgress(true);
      virtualWatch();
      // setFile(e.dataTransfer.files[0]);
    });
  }, [setShowProgress]);

  return (
    <div>
      <NavLink to="/">目录页</NavLink>
      <div
        className={styles.fileupload_process_container}
        id="drop_area"

      >
        {showProgress ? (
          <UploadProgress
            fileName={file.name}
            progress={progress}
            setShowProgress={setShowProgress}
          />
        ) : (
            <div
              className={styles.fileupload_process_placeholder}
              id="click_area">
              <input
                type="file"
                className={styles.click_upload_file}
                onChange={e => handleUploadFile(e.target.files)}
                id="clickFile"
              />
              <div className={styles.click_upload}>
                点击
          </div>
              <div className={styles.click_text}>
                或拖拽上传文件
          </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default FileUpload;

