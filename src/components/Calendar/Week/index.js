import React from "react";
import { WeekWrapper } from "components/Calendar/styles";
import Day from "components/Calendar/Day";

const Week = ({weekDays, showModalReminder}) => {

	return (
		<WeekWrapper>
      {
        weekDays.map((day) =>
          <Day
            day={day}
            key={`day-${day}}`}
            showModalReminder={showModalReminder}
          />)
      }
		</WeekWrapper>
	);
};

export default React.memo(Week);
