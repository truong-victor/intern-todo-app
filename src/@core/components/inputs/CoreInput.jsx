import { Box, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

const CoreInput = (props) => {
  const {
    className,
    control,
    name,
    label = "",
    placeholder,
    required = false,
    readOnly = false,
    type = "text",
    InputLabelProps = {},
    InputProps = {},
    inputProps = {},
    multiline,
    helperText,
    ...restProps
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
      <TextField
        fullWidth
        label={label}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        onBlur={onBlur}
        value={value}
        inputRef={ref}
        type={type}
        multiline={Boolean(multiline)}
        error={!!error}
        helperText={error && error.message}
        InputLabelProps={{
          shrink: placeholder ? true : undefined,
          required,
          ...InputLabelProps,
        }}
        inputProps={{
          readOnly,
          ...inputProps,
        }}
        InputProps={{
          ...InputProps,
        }}
        {...restProps}
      />
      {helperText && (
        <FormHelperText className="italic text-8">{helperText}</FormHelperText>
      )}
    </Box>
  );
};

export default React.memo(CoreInput);
