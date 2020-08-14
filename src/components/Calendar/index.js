import React, { useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import useModal from "hooks/useModal.js";
import Form from "components/Form";

import { CalendarWrapper, DayName } from "./styles";
import Month from "./Month";
import { selectMonth, selectYear} from "./Selectors";
import { createReminder, editReminder ,removeReminder} from "components/Calendar/CalendarSlice";
import { v4 as uuid } from "uuid";
import EmptyReminder from 'constants/emptyReminder';

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
const Months = moment.months();

const Calendar = ({}) => {
  const dispatch = useDispatch();
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);
  const [selectedReminder, setselectedReminder] = useState(EmptyReminder);
  const [Modal, openModal, closeModal] = useModal(false);

    const showModalReminder = React.useCallback((reminder) => {
      setselectedReminder({...EmptyReminder,...reminder})
      openModal();
    },[]);

    const submitHandler = (data)=> {
      let reminder = {...data, id: uuid()};
      if(selectedReminder.id){
        reminder = {...selectedReminder, ...data};
        dispatch(editReminder({updatedReminder: reminder, prevReminder: selectedReminder}));
      }else{
      let reminder = {...data, id: uuid()}
        dispatch(createReminder(reminder));
      }
      closeModal();
      setselectedReminder(EmptyReminder);
    }

    const deleteHandler = (data) =>{
      dispatch(removeReminder(data));
      closeModal();
      setselectedReminder(EmptyReminder);
    }
	return (
    <>
    <h1 className="title">{Months[month-1]}</h1>
		<CalendarWrapper>
			<WeekDays />
      <Month currentMonth={month} currentYear={year} showModalReminder={showModalReminder} />
		</CalendarWrapper>
      <Modal>
          <Form
            submitHandler={submitHandler}
            initialData={selectedReminder}
            deleteHandler={deleteHandler}
           />
      </Modal>
</>
	);
};

export default Calendar;
