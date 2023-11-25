import { Box, FormHelperText } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CoreInputRichText = (props) => {  
  const {
    className,
    control,
    name,
    label = "",
    placeholder,
    helperText,
  } = props;

  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Box className={className}>
      <p>{label}</p>

      <CKEditor
        placeholder={placeholder}
        className="p-4"
        editor={ClassicEditor}
        data={value}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
      {error ? (
        <p className="text-red-500 text-[12px]">{error?.message}</p>
      ) : null} 
      {helperText && (
        <FormHelperText className="italic text-8">{helperText}</FormHelperText>
      )}
    </Box>
  );
};

export default React.memo(CoreInputRichText);
