import { createSelector } from "@reduxjs/toolkit";

const calendarSelector = state => state.calendar;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.organization.value)`
const selectMonth = createSelector(
    calendarSelector,
    items => items.month
);

const selectYear = createSelector(
    calendarSelector,
    items => items.year
);

const selectReminders = createSelector(
  calendarSelector,
  items => items.reminders
);

export {
  selectMonth,
  selectYear,
  selectReminders,
};
