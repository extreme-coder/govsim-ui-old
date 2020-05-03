import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import { connect } from 'react-redux';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as actions from '../actions/entity_actions';

// eslint-disable-next-line no-unused-vars
const localizer = momentLocalizer(moment)

class TeacherAllocations extends React.Component {
  getEvents() {
    // eslint-disable-next-line prefer-const
    let events = [];
    let id = 0;
    console.log(this.props.classes)
    this.props.classes.map((cl) => {
      for (let d = new Date(cl.start_date); d <= new Date(cl.end_date); d.setDate(d.getDate() + 1)) {
        if (d.getDay() === 0 && cl.days_of_week.sunday) {
          events.push({
            id,
            title: cl.name,
            start: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.start_time.substring(0, 1), 10),
              parseInt(cl.start_time.substring(3, 4), 10),
              parseInt(cl.start_time.substring(6, 7), 10),
            ),
            end: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.end_time.substring(0, 1), 10),
              parseInt(cl.end_time.substring(3, 4), 10),
              parseInt(cl.end_time.substring(6, 7), 10),
            ),
          })
          id += 1;
        }
        if (d.getDay() === 1 && cl.days_of_week.monday) {
          events.push({
            id,
            title: cl.name,
            start: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.start_time.substring(0, 1), 10),
              parseInt(cl.start_time.substring(3, 4), 10),
              parseInt(cl.start_time.substring(6, 7), 10),
            ),
            end: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.end_time.substring(0, 1), 10),
              parseInt(cl.end_time.substring(3, 4), 10),
              parseInt(cl.end_time.substring(6, 7), 10),
            ),
          })
          id += 1;
        }
        if (d.getDay() === 2 && cl.days_of_week.tuesday) {
          events.push({
            id,
            title: cl.name,
            start: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.start_time.substring(0, 1), 10),
              parseInt(cl.start_time.substring(3, 4), 10),
              parseInt(cl.start_time.substring(6, 7), 10),
            ),
            end: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.end_time.substring(0, 1), 10),
              parseInt(cl.end_time.substring(3, 4), 10),
              parseInt(cl.end_time.substring(6, 7), 10),
            ),
          })
          id += 1;
        }
        if (d.getDay() === 3 && cl.days_of_week.wednesday) {
          events.push({
            id,
            title: cl.name,
            start: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.start_time.substring(0, 1), 10),
              parseInt(cl.start_time.substring(3, 4), 10),
              parseInt(cl.start_time.substring(6, 7), 10),
            ),
            end: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.end_time.substring(0, 1), 10),
              parseInt(cl.end_time.substring(3, 4), 10),
              parseInt(cl.end_time.substring(6, 7), 10),
            ),
          })
          id += 1;
        }
        if (d.getDay() === 4 && cl.days_of_week.thursday) {
          events.push({
            id,
            title: cl.name,
            start: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.start_time.substring(0, 1), 10),
              parseInt(cl.start_time.substring(3, 4), 10),
              parseInt(cl.start_time.substring(6, 7), 10),
            ),
            end: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.end_time.substring(0, 1), 10),
              parseInt(cl.end_time.substring(3, 4), 10),
              parseInt(cl.end_time.substring(6, 7), 10),
            ),
          })
          id += 1;
        }
        if (d.getDay() === 5 && cl.days_of_week.friday) {
          events.push({
            id,
            title: cl.name,
            start: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.start_time.substring(0, 1), 10),
              parseInt(cl.start_time.substring(3, 4), 10),
              parseInt(cl.start_time.substring(6, 7), 10),
            ),
            end: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.end_time.substring(0, 1), 10),
              parseInt(cl.end_time.substring(3, 4), 10),
              parseInt(cl.end_time.substring(6, 7), 10),
            ),
          })
          id += 1;
        }
        if (d.getDay() === 6 && cl.days_of_week.saturday) {
          events.push({
            id,
            title: cl.name,
            start: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.start_time.substring(0, 1), 10),
              parseInt(cl.start_time.substring(3, 4), 10),
              parseInt(cl.start_time.substring(6, 7), 10),
            ),
            end: new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              parseInt(cl.end_time.substring(0, 1), 10),
              parseInt(cl.end_time.substring(3, 4), 10),
              parseInt(cl.end_time.substring(6, 7), 10),
            ),
          })
          id += 1;
        }
      }
      return true
    });
    console.log(events)
    return events
  }

  componentDidMount() {
    this.props.getEntities('class');
  }

  render() {
    const events = this.getEvents()
    return (
      <Calendar
        events={events}
        localizer={localizer}
        defaultView={Views.DAY}
        views={['day', 'work_week']}
        step={30}
        defaultDate={new Date(2020, 3, 26)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(TeacherAllocations);
