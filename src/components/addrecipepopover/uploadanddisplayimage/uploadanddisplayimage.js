import React, { useState,useEffect } from "react";

function UploadAndDisplayImage (props){
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    setSelectedImage(null);
   },[props.clearImg])
  useEffect(() => {
    if(selectedImage !==null){
      let path =URL.createObjectURL(selectedImage);
      console.log(path);
       props.imageUpload(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  
  function removeImage(){
    setSelectedImage(null)
  }
  function uploadImageHandler(event){
    setSelectedImage(event.target.files[0]);

  }
  return (
    <div>
      {selectedImage && (
        <div className="mb-10">
        <img alt="not fount" width={"100px"} height ={"100px"}  src={URL.createObjectURL(selectedImage)} />
        <button className="btn btn-primary p-2" onClick={removeImage}>Remove</button>
        </div>
      )}

      <input
        type="file"
        name="myImage"
        onChange={uploadImageHandler}
      />
    </div>
  );
};

export default UploadAndDisplayImage;