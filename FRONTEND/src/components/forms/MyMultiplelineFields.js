import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';


export default function MyMultilineField(props) {
  const { labels, placeholder, name, control } = props;
  return (
    <Controller
        name={name}
        control={control}
        render={({
            field: {onChange, value},
            fieldState: {error},
            formState,
        }
        ) => (

            <TextField
          id="standard-multiline-static"
          label={labels} 
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
           placeholder={placeholder}
        />
        )
    }
        

    />

  )
}