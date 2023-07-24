import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { AddEventForm } from './components/AddEventForm';
import Calendar from './components/Calendar';
import { EditEventForm } from './components/EditEventForm';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addEvent" element={<AddEventForm />} />
          <Route path="/editEvent" element={<EditEventForm />} />
          <Route path="/mybookings" element={<Calendar />} />
          <Route path="/" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
