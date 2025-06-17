import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';

export default function MyDatePicker(props) {
  const { label, width = '100%', control, name } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label={label}
            value={value || null}
            onChange={onChange}
            sx={{ width, padding: '10px' }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
