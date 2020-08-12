import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

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

const  initialState = {
  reminders: [],
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
            state.reminders = [...state.reminders, action.payload.data];
        },
        [createReminder.rejected]: state => {},
    }
});

export default calendar.reducer;
