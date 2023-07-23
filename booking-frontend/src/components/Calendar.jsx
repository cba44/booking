import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useNavigate } from 'react-router-dom';

export default function Calendar() {

  const navigate = useNavigate();

  const handleDateClick = (selectionInfo) => {
    selectionInfo.view.calendar.changeView('timeGridDay', selectionInfo.dateStr);
  };

  const handleTimeClick = (selectionInfo) => {
    let calendarApi = selectionInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    const start = selectionInfo.startStr;
    const end = selectionInfo.endStr;

    navigate('/editEvent', {state: {start, end}});
  };

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
        // weekends={false}
        selectable={true}
        height={'90vh'}
        slotMinTime={"07:00:00"}
        slotMaxTime={"17:00:00"}
        expandRows={true}
        showNonCurrentDates={false}
        allDaySlot={false}

        select={function (selectionInfo) {
          if (selectionInfo.view.type === 'dayGridMonth') {
            selectionInfo.view.calendar.unselect() //Disable multi date selection
          } else if (selectionInfo.view.type === 'timeGridDay') {
            // debugger;
            handleTimeClick(selectionInfo)  //Add event for clicked time slot
          }
        }}

        dateClick={function (selectionInfo) {
          if (selectionInfo.view.type === 'dayGridMonth') {
            handleDateClick(selectionInfo) //Single date selection scenario handling
          }
        }}
      />
    </div>
  )
}