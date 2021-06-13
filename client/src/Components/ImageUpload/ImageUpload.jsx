import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./ImageUpload.css";
import { uploadImage } from "../../Services/api";

export default function ImageUpload(props) {
  const [uploadedFiles, setUploadedFiles] = useState([File]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      const url = `https://api.cloudinary.com/v1_1/angelam/image/upload`;

      acceptedFiles.forEach(async (acceptedFile) => {
        const formData = new FormData();
        formData.append("file", acceptedFile);
        formData.append("upload_preset", "uewtqo3e");

        const response = await fetch(url, {
          method: "post",
          body: formData,
        });
        const data = await response.json();
        uploadToAirtable(data);
        setUploadedFiles((old) => [...old, data]);
      });
    },
    // eslint-disable-next-line
    [props]
  );

  const uploadToAirtable = async (data) => {
    if (data.secure_url) {
      let id = props.plant.id;
      data = { ...props.plant.fields, image: data.secure_url };
      await uploadImage(id, data);
      props.fetchData();
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  return (
    <>
      <div
        {...getRootProps()}
        className={`${"dropzone"} ${isDragActive ? "active" : null}`}
      >
        <input {...getInputProps()}></input>
        <h2>
          Drag & Drop <br />
          Image Here
        </h2>
      </div>
      <ul>
        {uploadedFiles.map((file, index) => (
          <img key={index} src={file.url} alt={file.url} />
        ))}
      </ul>
    </>
  );
}
