import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

import { addReminder, updateReminder, deleteAllReminders, deleteReminder } from "utils/reminder";
import { getPreviousMonthAndYear, getNextMonth } from "utils/date";

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const createReminder = createAsyncThunk(
    "calendar/createReminder",
    async (data) => {
        try {
            return { data };
        } catch (err) {
            Promise.reject(err);
        }
    }
);

export const editReminder = createAsyncThunk(
  "calendar/editReminder",
  async (data) => {
      try {
          return { data };
      } catch (err) {
          Promise.reject(err);
      }
  }
);
export const removeReminder = createAsyncThunk(
  "calendar/removeReminder",
  async (data) => {
      try {
          return { data };
      } catch (err) {
          Promise.reject(err);
      }
  }
);

export const clearReminders = createAsyncThunk(
  "calendar/clearReminders",
  async (data) => {
      try {
          return { data };
      } catch (err) {
          Promise.reject(err);
      }
  }
);
export const nextMonth = createAsyncThunk(
  "calendar/nextMonth",
  async () => {
      try {
          return {  };
      } catch (err) {
          Promise.reject(err);
      }
  }
);

export const previusMonth = createAsyncThunk(
  "calendar/previusMonth",
  async () => {
      try {
          return {};
      } catch (err) {
          Promise.reject(err);
      }
  }
);

const  initialState = {
  reminders: {},
  year: moment().year(),
  month: (moment().month() + 1),
}

export const calendar = createSlice({
    name: "calendar",
    initialState,
    reducers: {},
    extraReducers: {
        [createReminder.pending]: state => {},
        [createReminder.fulfilled]: (state, action) => {
          const newReminders = addReminder(action.payload.data, state.reminders )
          state.reminders = newReminders;
        },
        [createReminder.rejected]: state => {},
        [editReminder.pending]: state => {},
        [editReminder.fulfilled]: (state, action) => {
          const newReminders = updateReminder(action.payload.data.prevReminder,action.payload.data.updatedReminder, state.reminders)
          state.reminders = newReminders;
        },
        [editReminder.rejected]: state => {},
        [removeReminder.pending]: state => {},
        [removeReminder.fulfilled]: (state, action) => {
          const newReminders = deleteReminder(action.payload.data, state.reminders)
          state.reminders = newReminders;
        },
        [removeReminder.rejected]: state => {},
        [clearReminders.rejected]: state => {},
        [clearReminders.pending]: state => {},
        [clearReminders.fulfilled]: (state, action) => {
          const cleared = deleteAllReminders(action.payload.data, state.reminders )
          state.reminders = cleared;
        },
        [nextMonth.rejected]: state => {},
        [nextMonth.pending]: state => {},
        [nextMonth.fulfilled]: (state, action) => {
          const date = getNextMonth( state.month,state.year );
          state.year = date.year;
          state.month = date.month;
        },
        [previusMonth.rejected]: state => {},
        [previusMonth.pending]: state => {},
        [previusMonth.fulfilled]: (state, action) => {
          const date = getPreviousMonthAndYear( state.month,state.year );
          state.year = date.year;
          state.month = date.month;
        },



    }
});

export default calendar.reducer;
