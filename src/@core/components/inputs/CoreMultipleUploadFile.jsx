import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import Image from "mui-image";
import { useRef, useState } from "react";
import { useController } from "react-hook-form";
const CoreMultipleUploadFile = (props) => {
  const { control, name } = props;
  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const inputRef = useRef();
  const handleClickUploadFile = () => {
    inputRef.current.click();
  };

  const [loading, setLoading] = useState(false);
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const token = sessionStorage.getItem("accessToken");
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://nguyencongclone.onrender.com/api/v1/file",
        {
          headers: { "x-access-token": token },
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      onChange([...value, result?.data]);
    } catch (error) {
      console.log(
        "🚀 ~ file: CoreUploadFile.jsx:32 ~ handleFileChange ~ error:",
        error
      );
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <Box className="flex gap-3">
        {value?.length > 0
          ? value.map((image, index) => (
              <Image key={index} width={100} height={100} src={image} />
            ))
          : "Chưa có file nào được upload"}
      </Box>
      <LoadingButton
        loading={loading}
        onClick={handleClickUploadFile}
        variant="contained"
        color="primary"
      >
        Choose file
      </LoadingButton>
    </div>
  );
};

export default CoreMultipleUploadFile;
