import { useState } from 'react';

import { FormControl, FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingService from '../services/BookingService';

export function AddEventForm() {

  const location = useLocation();
  const { start, end } = location.state;

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [employeeNo, setEmployeeNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    const calendarData = {
      title,
      employeeNo,
      start,
      end
    }

    BookingService.create(calendarData)
      .then(res => console.log(res))
      .then(navigate('/'))
      .catch(e => console.log(e))

    console.log('Submitted')
  }

  return (
    <FormControl >
      <Button type='submit' onClick={() => navigate('/')}>Home</Button>
      <FormLabel>Booking from {location.state.start} to {location.state.end}</FormLabel>
      <FormLabel htmlFor='title'>Title</FormLabel>
      <TextField type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}></TextField>
      <FormLabel htmlFor='employeeNo'>Employee Number</FormLabel>
      <TextField type="text" id="employeeNo" value={employeeNo} onChange={e => setEmployeeNo(e.target.value)}></TextField>
      <Button type='submit' onClick={handleSubmit}>Submit</Button>
    </FormControl>

  )
}