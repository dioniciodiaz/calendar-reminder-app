import React from "react";
import { WeekWrapper } from "components/Calendar/styles";
import Day from "components/Calendar/Day";

const Week = ({weekDays, showModalReminder}) => {

const removeReminders = () => {

}

	return (
		<WeekWrapper>
      {
        weekDays.map((day, index) =>
          <Day
            day={day}
            key={`week-${index}-day-${day}}`}
            removeReminders={removeReminders}
            showModalReminder={showModalReminder}
          />)
      }
		</WeekWrapper>
	);
};

export default React.memo(Week);
