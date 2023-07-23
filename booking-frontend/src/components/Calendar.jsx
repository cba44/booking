import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import BookingService from '../services/BookingService';

export default function Calendar() {

  const navigate = useNavigate();

  const selectHandler = (info) => {
    if (info.view.type === 'dayGridMonth') {
      info.view.calendar.unselect() //Disable multi date selection
    } else if (info.view.type === 'timeGridDay') {
      addEvent(info)  //Add event for clicked time slot
    }
  }

  const dateClickHandler = (info) => {
    if (info.view.type === 'dayGridMonth') {
      handleDateClick(info, info.dateStr) //Single date selection scenario handling
    }
  }

  const handleEventClickHandler = (info) => {
    // alert('Event: ' + info.event.title);
    // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    // alert('View: ' + info.view.type);

    if (info.view.type === 'dayGridMonth') {
      const date = info.event.startStr;
      // const month = getMonthString(date.getMonth());
      const eventDate = date.substring(0,10);
      handleDateClick(info, eventDate);
    } else if (info.view.type === 'timeGridDay') {
      editEvent(info);
    }
















  }

  const handleDateClick = (info, date) => {
    info.view.calendar.changeView('timeGridDay', date);
  };

  const addEvent = (info) => {
    let calendarApi = info.view.calendar;

    calendarApi.unselect(); // clear date selection

    const start = info.startStr;
    const end = info.endStr;

    navigate('/addEvent', { state: { start, end } });
  };

  const editEvent = (info) => {
    let calendarApi = info.view.calendar;

    calendarApi.unselect(); // clear date selection

    const start = info.event.startStr;
    const end = info.event.endStr;
    const date = start.substring(0,10);
    const startTime = start.substring(11,16);
    const endTime = end.substring(11,16);
    const timezone = start.substring(19,25);

    const event = {
      id: info.event.id,
      title: info.event.title,
      employeeNo: info.event.extendedProps.employeeNo,
      date,
      startTime,
      endTime,
      timezone
    }
    debugger
    navigate('/editEvent', { state: { event } });
  };

  const [events, setEvents] = useState([])

  useEffect(() => {
    BookingService.getAll()
      .then(res => setEvents(res.data))
  }, [])

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth'
        }}
        weekends={false}
        selectable={true}
        height={'90vh'}
        slotMinTime={"07:00:00"}
        slotMaxTime={"17:00:00"}
        expandRows={true}
        showNonCurrentDates={false}
        allDaySlot={false}

        events={events}

        select={selectHandler}
        dateClick={dateClickHandler}

        eventClick={handleEventClickHandler}
      />
    </div>
  )
}