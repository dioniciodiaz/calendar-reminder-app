import React from "react";
import moment from "moment";
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

const Day = ({day, displayReminderModal, removeReminders}) => {

	return (
    <td>
      <DayWrapper>
        <DayHeader>
          <DayNumber>
          {day.dateNumber}
          </DayNumber>
          {day.isFromCurrentMonth && (
            <ActionButtons>
              <AddButton
                onClick={() => removeReminders(day)}
                className='action-button'>
                &#43;
              </AddButton>
              <DeleteButton
                onClick={() => displayReminderModal(day)}
                className='action-button'>
                -
              </DeleteButton>
            </ActionButtons>
            )}
        </DayHeader>
          {day.isFromCurrentMonth && (
          <Reminders>
          </Reminders>
        )}
      </DayWrapper>
    </td>
	);
};

export default Day;
