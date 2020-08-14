import React from "react";

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

import {getCardinalNumberOfDate } from 'utils/date';

const Day = ({day, showModalReminder }) => {
const cardinalNumber = getCardinalNumberOfDate(day)

	return (
    <td>
      <DayWrapper>
        <DayHeader>
          <DayNumber>
          {cardinalNumber}
          </DayNumber>
            <ActionButtons>
              <AddButton
                onClick={() => showModalReminder(day)}
                className='action-button'>
                &#43;
              </AddButton>
              <DeleteButton
                onClick={() => showModalReminder(day)}
                className='action-button'>
                -
              </DeleteButton>
            </ActionButtons>
        </DayHeader>

          <Reminders>
          </Reminders>
      </DayWrapper>
    </td>
	);
};

export default React.memo(Day);
