import { FormControl, FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import BookingService from '../services/BookingService';

export function EditEventForm() {

  const location = useLocation();
  const event = location.state.event;

  const navigate = useNavigate();

  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);
  const [start, setStart] = useState(event.startTime);
  const [end, setEnd] = useState(event.endTime);
  const [employeeNo, setEmployeeNo] = useState(event.employeeNo);

  const handleUpdate = (e) => {
    e.preventDefault();

    const confirmation = confirm('Do you want to confirm update?');

    if (confirmation) {
      const calendarData = {
        title,
        employeeNo,
        start: `${date}T${start}:00${event.timezone}`,
        end: `${date}T${end}:00${event.timezone}`
      }

      BookingService.update(event.id, calendarData)
        .then(res => console.log(res))
        .then(navigate('/'))
        .catch(e => console.log(e))

      console.log('Submitted')
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();

    alert('This action cannot be reversed')
    const confirmation = confirm('Do you want to confirm delete?');

    if (confirmation) {
      BookingService.delete(event.id)
        .then(res => console.log(res))
        .then(navigate('/'))
        .catch(e => console.log(e))

      console.log('Submitted')
    }
  }

  return (
    <FormControl >
      <Button type='submit' onClick={navigate('/')}>Home</Button>
      <FormLabel htmlFor='title'>Title</FormLabel>
      <TextField type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}></TextField>
      <FormLabel htmlFor='date'>Date (YYYY-MM-DD)</FormLabel>
      <TextField type="text" id="date" value={date} onChange={e => setDate(e.target.value)}></TextField>
      <FormLabel htmlFor='start'>Start (hh:mm)</FormLabel>
      <TextField type="text" id="start" value={start} onChange={e => setStart(e.target.value)}></TextField>
      <FormLabel htmlFor='end'>End (hh:mm)</FormLabel>
      <TextField type="text" id="end" value={end} onChange={e => setEnd(e.target.value)}></TextField>
      <FormLabel htmlFor='employeeNo'>Employee Number</FormLabel>
      <TextField type="text" id="employeeNo" value={employeeNo} onChange={e => setEmployeeNo(e.target.value)}></TextField>
      <Button type='submit' onClick={handleUpdate}>Update</Button>
      <Button type='submit' onClick={handleDelete}>Delete</Button>
    </FormControl>

  )
}