import React from "react";
import { WeekWrapper } from "components/Calendar/styles";
import Day from "components/Calendar/Day";

const Week = ({weekDays}) => {

const displayReminderModal = () => {

}
const removeReminders = () => {

}

	return (
		<WeekWrapper>
      {
        weekDays.map((day, index) =>
          <Day
            day={day}
            key={`week-${index}-day-${day}}`}
            displayReminderModal={displayReminderModal}
            removeReminders={removeReminders}
          />)
      }
		</WeekWrapper>
	);
};

export default Week;
