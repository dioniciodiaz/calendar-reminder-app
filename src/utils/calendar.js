import moment from "moment";

import { getDatesArray } from 'utils/date';

export const getCalendarDays = (month, year, numberOfWeeksToInclude = 6) => {
	const numberOfDaysInWeek = 7;
	const firstMonthDayDateObj = moment(`${year}/${month}/01`, "YYYY-M-DD");
	const firstDayOfMonth = firstMonthDayDateObj.day();
  const lastDayDateOfMonth = firstMonthDayDateObj.endOf("month").date();
	// fill up the spaces that are before the first day of the month
	const lastDaysDateOfPrevMonth = findLastDaysFromPreviusMonth(month, year, firstDayOfMonth);
  const monthDaysStructure = [];

  let currentMonth = month;
  let currentDateToAdd = 1
    if(lastDaysDateOfPrevMonth.length){
      currentDateToAdd = 2
    }

	for (let weekRowIndex = 0; weekRowIndex < numberOfWeeksToInclude; weekRowIndex++) {
		const isFirstWeekRow = weekRowIndex === 0;
		const weekRow = isFirstWeekRow ? [...lastDaysDateOfPrevMonth] : [];

		for (let j = weekRow.length; j < numberOfDaysInWeek; j++) {
			const islastDayOfMonth = currentDateToAdd === lastDayDateOfMonth;
      const day = moment(`${year}/${currentMonth}/${currentDateToAdd}`, "YYYY-M-D").format("YYYY-MM-DD");
      weekRow.push(day);
      //fill up the spaces that are after the last day of the month
      if (islastDayOfMonth) {
        currentDateToAdd = 1
        currentMonth = currentMonth + 1;
      } else{
        currentDateToAdd = currentDateToAdd + 1;
      }
		}

		monthDaysStructure.push(weekRow);
	}

	return monthDaysStructure;
};

// Adds the isFromCurrentMonth property to each date, used to tell if it is part of the month in display
export const formatWeekDaysRows = (monthDayStructure) => {
	let isLoopingCurrentMonth = false;
	const formattedMonthDaysRows = monthDayStructure.map(weekRow => {
		const formattedWeekRow = weekRow.map(dateNumber => {
			const isStartingAMonth = dateNumber === 1;
			let formattedDate;
			if (isStartingAMonth) isLoopingCurrentMonth = !isLoopingCurrentMonth;

			formattedDate = { dateNumber, isFromCurrentMonth: isLoopingCurrentMonth };
			return formattedDate;
		});

		return formattedWeekRow;
	});

	return formattedMonthDaysRows;
};




export const findLastDaysFromPreviusMonth = (monthNumber, year, daysToFind) => {

	const firstMonthDayDate = `${year}/${monthNumber}/01`;
  let lastMonthDays = [];
    if (daysToFind > 0) {
     const startDate =  moment(firstMonthDayDate).subtract(daysToFind, 'days').format("YYYY-MM-DD");
      lastMonthDays = getDatesArray(startDate,firstMonthDayDate);
    }

	return lastMonthDays;
};
