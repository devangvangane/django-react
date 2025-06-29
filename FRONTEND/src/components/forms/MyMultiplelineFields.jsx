import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function MyMultilineField(props) {
  const { label, width = '100%', placeholder, name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          sx={{ width, padding: '10px' }}
          id={`${name}-multiline`}
          label={label}
          multiline
          rows={1}
          variant="standard"
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : ''}
        />
      )}
    />
  );
}
