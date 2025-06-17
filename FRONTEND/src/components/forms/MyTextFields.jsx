import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function MyTextField(props) {
  const { label, width, placeholder, name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          sx={{width:{width},  padding:"10px"}}
          label={label}
          variant="standard"
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : ""}
          fullWidth
        />
      )}
    />
  );
}
