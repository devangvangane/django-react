import * as React from "react";
import TextField from "@mui/material/TextField";
import {Controller} from 'react-hook-form'
 
export default function MyTextField(props) {
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
            <TextField id="standard-basic" 
            label={labels} 
            variant="standard" 
            placeholder={placeholder}
            />
        )
    }
    />

  )
}
