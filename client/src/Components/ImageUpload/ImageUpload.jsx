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
    [props]
  );

  const uploadToAirtable = async (data) => {
    if (data.secure_url) {
      let id = props.plant.id;
      data = { ...props.plant.fields, image: data.secure_url };
      const res = await uploadImage(id, data);
      props.fetchData();
    }
  };
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  return (
    <>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()}></input>
        drop zone
      </div>
      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>{file.url}</li>
        ))}
      </ul>
    </>
  );
}
