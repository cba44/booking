import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import { EventForm } from './components/EventForm';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/editEvent" element={<EventForm />} />
          <Route path="/" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
