import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import useModal from "hooks/useModal.js";
import Form from "components/Form";

import { CalendarWrapper, DayName } from "./styles";
import Month from "./Month";
import { selectMonth, selectYear} from "./Selectors";
import { createReminder } from "./CalendarSlice";

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

const Calendar = ({}) => {
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);

  const [Modal, openModal] = useModal(false);

    const showModalReminder = React.useCallback(() =>{
      openModal();
    },[]);
	return (
    <>
		<CalendarWrapper>
			<WeekDays />
      <Month currentMonth={month} currentYear={year} showModalReminder={showModalReminder} />
		</CalendarWrapper>
      <Modal>
          <Form></Form>
      </Modal>
</>
	);
};

export default Calendar;
