import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { clearReminders } from "components/Calendar/CalendarSlice";
import { selectReminders } from "components/Calendar/Selectors";

import {
  DayWrapper,
  AddButton,
  DeleteButton,
  Reminders,
  DayHeader,
  DayNumber,
  ActionButtons,
  Reminder
} from "components/Calendar/styles";

import {getCardinalNumberOfDate, formatDate } from 'utils/date';


const Day = ({day, showModalReminder }) => {
  const dispatch = useDispatch();
  const allReminders = useSelector(selectReminders)
  const cardinalNumber = getCardinalNumberOfDate(day)
  const newReminder ={ date: day }

  const dateReminders = allReminders[day] || [];

	return (
    <td style={{ overflowYy: 'scroll', overflowX: 'hidden'}}>
      <DayWrapper>
        <DayHeader>
          <DayNumber>
          {cardinalNumber}
          </DayNumber>
            <ActionButtons>
              <AddButton
                onClick={() => showModalReminder(newReminder)}
                className='action-button'>
                &#43;
              </AddButton>
              { (dateReminders.length) ?
                <DeleteButton
                onClick={() => {dispatch(clearReminders(day))}}
                className='action-button'>
                -
              </DeleteButton>
              : null}

            </ActionButtons>
        </DayHeader>
        <Reminders>
          {
            dateReminders.map(item =>
              <Reminder
                color={item.bgColor}
                onClick={() => showModalReminder(item)}
                >
                {item.description}
              </Reminder>)
          }
          </Reminders>
      </DayWrapper>
    </td>
	);
};

export default React.memo(Day);
