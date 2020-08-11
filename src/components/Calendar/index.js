import React from "react";
import moment from "moment";
import { CalendarWrapper, DayCell } from "./styles";

const WeekDaysRow = () => {
	const daysName = moment.weekdays();
	return (
		<thead>
			<tr>{daysName.map(dayName =>
        <DayCell key={dayName}>
          {dayName}
        </DayCell>)}
      </tr>
		</thead>
	);
};
const Calendar = ({}) => {
	return (
		<CalendarWrapper>
			<WeekDaysRow />
		</CalendarWrapper>
	);
};

export default Calendar;
