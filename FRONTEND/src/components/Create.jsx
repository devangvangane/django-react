import React from 'react'
import {Box, Typography, Button} from '@mui/material';
import { useForm } from 'react-hook-form';
import MyTextField from "./forms/MyTextFields";
import MyDatePicker from "./forms/MyDatePickerField";
import MyMultilineField from "./forms/MyMultiplelineFields";
import MySelectField from "./forms/MySelectField";
import AxiosInstance from './Axios';
import Dayjs from 'dayjs';

const Create = () => {
  const {handleSubmit, control} = useForm()

  const submission = (data) =>
    {
    const StartDate = Dayjs(data.start_date).format("YYYY-MM-DD");
    const EndDate = Dayjs(data.end_date).format("YYYY-MM-DD");

    console.log(data.name, data.status, data.comments, StartDate, EndDate);
    AxiosInstance.post(
      `project/`, {
        name: data.name,
        status : data.status,
        comments: data.comments,
        start_date:StartDate,
        end_date: EndDate,
      }
    )
  };
  return (

    <div>
        <form onSubmit={handleSubmit(submission)}>       
            <Box sx={{display:'flex', width:"100%", backgroundColor:'#00003f', marginBottom: "10px"}}>
                  <Typography sx={{marginLeft:"20px", color: "#fff"}}>
                      Create records
                  </Typography>
            </Box>

            <Box sx={{display:'flex', width:"100%",boxShadow:3, padding: 4, flexDirection:"column"}}>
                  <Box sx={{display:'flex', justifyContent:'space-around'}}>
                      <MyTextField
                          label="Name"
                          name="name"
                          control={control}
                          placeholder="Provide a project name"
                          width={"30%"}
                      />

                      <MyDatePicker
                          label="Start Date"
                          name="start_date"
                          control={control}
                          width={"30%"}
                      />

                      <MyDatePicker
                          label="End Date"
                          name="end_date"
                          control={control}
                          width={"30%"}
                      />
              </Box>

              <Box sx={{display:'flex', justifyContent:'space-around', marginTop: "20px"}}>
                      <MyMultilineField
                          label="Comments"
                          name="comments"
                          control={control}
                          placeholder="Provide a project comments"
                          width={"30%"}
                      />

                      <MySelectField
                          label="Status"
                          name="status"
                          control={control}
                          width={"30%"}
                      />

                      <Box sx={{width:"30%"}}>
                          <Button variant="contained" type="submit" sx={{width:"100%"}}>Submit</Button>
                      </Box>
              </Box>
            </Box>

       </form>

    </div>
  )
}

export default Create