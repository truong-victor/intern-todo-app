import { Box, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { addProductService } from "../../../pages/Admin/services/AddproductService";
const CoreInputUpload = (props) => {
  const [image, setImage] = useState(null);
  const { label, className, placeholder, value, ref, type, helperText } = props;
  console.log(image);
  // const {field: {error}} = useController()
  const handleFileChange = (e) => {
    const file = e.target.files;
    console.log(file)
    const image = file[0];
    if (file === undefined) {
      console.log("Chua chon file");
    } else if (
      image.type === "image/png" ||
      image.type === "image/jpeg" || 
      image.type === "image/jpg" 
    ) {
      console.log("Anh hop le");
      setImage(image);
    } else {
      console.log("Sai dinh dang");
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const result = await fetch("http://localhost:8888/api/v1/file",
       {
        // headers: { "x-access-token": token },
        method: "POST",
        body: formData,
      });
      const data = await result.json();
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className={className}>
      <TextField
        fullWidth
        label={label}
        placeholder={placeholder}
        onChange={handleFileChange}
        value={value}
        inputRef={ref}
        type={type}
      />
      <button onClick={handleUpload}>Upload a file</button>
    </Box>
  );
};

export default CoreInputUpload;