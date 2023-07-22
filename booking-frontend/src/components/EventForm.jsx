import { FormControl, FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useLocation } from 'react-router-dom';

export function EventForm() {

  const location = useLocation();

  const { newItem, setNewItem } = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <FormControl >
      <FormLabel>Booking from {location.state.start} to {location.state.end}</FormLabel>
      <FormLabel htmlFor='title'>Title</FormLabel>
      <TextField type="text" id="title"></TextField>
      <FormLabel htmlFor='employeeNo'>Employee Number</FormLabel>
      <TextField type="text" id="employeeNo"></TextField>
      <Button onClick={handleSubmit}>Submit</Button>
    </FormControl>

  )
}