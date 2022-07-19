import React, { useState} from 'react'

const Form = () => {

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setPostData({ ...postData, selectedFile: base64 });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
    </div>
  );
}

export default Form