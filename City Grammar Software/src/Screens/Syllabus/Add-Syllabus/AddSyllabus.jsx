// AdmissionForm.jsx
import React, { useState } from 'react';
import './addsyllabus.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { database, storage } from '../../../Config/firebase';
import UploadFile from '../../../Components/UploadFile/UploadFile';
import showSweetAlert from '../../../Components/ShowSweetAlert';

const AddSyllabus = () => {
  const [file, setFile] = useState(null); // State to track the selected file
  const [syllabusData, setSyllabusData] = useState({
    name: "",
    class: "",
    syllabusUrl: ""
  });

  const handleAddSyllabus = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file.");
      return;
    }

    try {
      showSweetAlert('loading','syllabus is being submitted',true,true)
      // Step 1: Upload the file to Firebase Storage
      const fileRef = ref(storage, `uploads/${file.name}`);
      const uploadTask = await uploadBytesResumable(fileRef, file);

      // Wait for the upload to complete and get the download URL
      const downloadURL = await getDownloadURL(fileRef);

      // Step 2: Include the file URL in the syllabus data
      const syllabusDataWithUrl = {
        ...syllabusData,
        syllabusUrl: downloadURL
      };

      // Step 3: Store the syllabus data (including file URL) in Firestore
      await addDoc(collection(database, 'Syllabus'), syllabusDataWithUrl);

      showSweetAlert('Syllabus Submitted','',false,false)
     

      // Reset the form fields and file state after submission
      setSyllabusData({
        name: "",
        class: "",
        syllabusUrl: ""
      });
      setFile(null);
    } catch (error) {
      console.error("Error uploading file or adding data:", error);
    }
  };

  return (
    <>
      <main id="main" className="container mt-4 mb-4">
        <div className="row stdregis">
          <div className="col-lg-2"></div>
          <div className="col-xs-12 col-lg-offset-3 col-lg-8">
            <div className="m-b-md text-center">
              <h1 id="title" className=''>Add Syllabus</h1>
            </div>

            <form id="syllabus-form" name="syllabus-form" onSubmit={handleAddSyllabus}>
              <fieldset>
                <label htmlFor="syllabusname">
                  <span className='fs-4'>Syllabus Name</span>
                  <input
                    value={syllabusData.name}
                    onChange={(e) => setSyllabusData({ ...syllabusData, name: e.target.value })}
                    type="text"
                    id="syllabusname"
                    name="syllabusname"
                    placeholder="Enter Syllabus Name"
                    required
                  />
                </label>
              </fieldset>

              <fieldset>
                <label htmlFor="class">
                  <span className='fs-4'>Class</span>
                  <input
                    onChange={(e) => setSyllabusData({ ...syllabusData, class: e.target.value })}
                    value={syllabusData.class}
                    className="w-100"
                    type="number"
                    id="class"
                    name="class"
                    placeholder="Enter your class"
                    required
                  />
                </label>
              </fieldset>      

              {/* Pass setFile function to UploadFile component */}
              <UploadFile setFile={setFile} />

              <button 
                id="submitBtn"
                type="submit"
                name="submitBtn"
                className="btn btn-primary w-100 btnsubmit border-0 mt-5"
              >
                Add Syllabus
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddSyllabus;
