import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

export default function MySelectField(props) {
  const { label, name, control, width = '100%' } = props;

  return (
    <FormControl variant="standard" sx={{ width, padding: '10px' }}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            labelId={`${name}-label`}
            id={`${name}-select`}
            value={value || ''}
            onChange={onChange}
            error={!!error}
          >
            <MenuItem value="">
              <em>{label}</em>
            </MenuItem>
            <MenuItem value={'Open'}>Open</MenuItem>
            <MenuItem value={'In Progress'}>In Progress</MenuItem>
            <MenuItem value={'Completed'}>Completed</MenuItem>
          </Select>
        )}
      />
    </FormControl>
  );
}
