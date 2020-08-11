import moment from "moment";

export const findLastDaysFromMonth = (monthNumber, year, daysToFind) => {
	const firstMonthDayDate = `${year}/${monthNumber}/01`;
	const lastMonthDay = moment(firstMonthDayDate, "YYYY-MM-DD")
		.endOf("month")
		.date();
	const lastMonthDays = [];

	for (let index = 0; index < daysToFind; index++) {
		lastMonthDays.push(lastMonthDay - index);
	}

	return lastMonthDays.reverse();
};

export const extractMonthDate = dateToExtract => ({
	month: dateToExtract.month() + 1,
	year: dateToExtract.year()
});

export const getPreviousMonth = (month, year) => {
	const prevMonthDateObj = moment(`${year}/${month}/01`, "YYYY-MM-DD").subtract(1, "month");
	const prevMonthDate = extractMonthDate(prevMonthDateObj);

	return prevMonthDate;
};

export const getNextMonthDate = (month, year) => {
	const nextMonthDateObj = moment(`${year}/${month}/01`, "YYYY-MM-DD").add(1, "month");
	const nextMonthDate = extractMonthDate(nextMonthDateObj);

	return nextMonthDate;
};

export const getCalendarDays = (month, year, numberOfWeeksToInclude = 5) => {
	const numberOfDaysInWeek = 7;
	const firstMonthDayDateObj = moment(`${year}/${month}/01`, "YYYY-MM-DD");
	const firstDayOfMonth = firstMonthDayDateObj.day();
	const lastDayDateOfMonth = firstMonthDayDateObj.endOf("month").date();
	const { month: previousMonth, year: previousMonthYear } = getPreviousMonth(month, year);
	// fill up the spaces that are before the first day of the month
	const lastDaysDateOfPrevMonth = findLastDaysFromMonth(previousMonth, previousMonthYear, firstDayOfMonth);
  const monthDaysStructure = [];

	for (let i = 0, currentDateToAdd = 1; i < numberOfWeeksToInclude; i++) {
		const isFirstWeekRow = i === 0;
		const weekRow = isFirstWeekRow ? [...lastDaysDateOfPrevMonth] : [];

		for (let j = weekRow.length; j < numberOfDaysInWeek; j++) {
			const islastDayOfMonth = currentDateToAdd === lastDayDateOfMonth;

			weekRow.push(currentDateToAdd);
			//fill up the spaces that are after the last day of the month
			currentDateToAdd = islastDayOfMonth ? 1 : currentDateToAdd + 1;
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
