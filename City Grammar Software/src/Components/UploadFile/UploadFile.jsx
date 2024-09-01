// FileUpload.js
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../Config/firebase"; // Import storage from your Firebase config
import { MdUpload } from "react-icons/md";

const UploadFile = ({ setFile}) => {
  const [file, setLocalFile] = useState(null);
 
  const handleFileChange =  (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setLocalFile(selectedFile);
     
      setFile(selectedFile); // Update the file state in the parent component
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click(); // Trigger the hidden file input click
  };


  return (
    <div>
      {/* Display the selected file name above the button */}
      {file && <p>Selected File: {file.name}</p>}

      {/* Hidden file input */}
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        accept=".pdf, image/*"
        style={{ display: "none" }} // Hide the file input
      />

      {/* Button to trigger file input */}
      <button type="button" className="btn me-2 mt-2 btn-primary" onClick={handleButtonClick}>
        Select PDF or Image
      </button>

  

     
    </div>
  );
};

export default UploadFile;
