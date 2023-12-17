import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import { useRef, useState } from "react";
import { useController } from "react-hook-form";

const CoreUploadFile = (props) => {
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
    setLoading(true);
    const file = e.target.files[0];
    const token = sessionStorage.getItem("accessToken");
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "http://localhost:8888/api/v1/file",
        {
          method: "POST",
          headers: { "x-access-token": token },
          body: formData,
        }
      );
      const result = await response.json();

      onChange(result?.data);
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

      {value ? (
        <Box className="w-[120px] aspect-square overflow-hidden">
          <img src={value} alt="upload" className="w-full h-full" />
        </Box>
      ) : null}

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

export default CoreUploadFile;
