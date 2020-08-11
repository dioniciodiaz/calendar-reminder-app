import React from "react";
import moment from "moment";
import { CalendarWrapper, DayName } from "./styles";
import Month from "./Month";

const WeekDays = () => {
	const daysName = moment.weekdays();
	return (
		<thead>
			<tr>{daysName.map((dayName) =>
        <DayName key={dayName}>
          {dayName}
        </DayName>)}
      </tr>
		</thead>
	);
};

const Calendar = ({month, year}) => {
	return (
		<CalendarWrapper>
			<WeekDays />
      <Month currentMonth={month} currentYear={year} />
		</CalendarWrapper>
	);
};

export default Calendar;
