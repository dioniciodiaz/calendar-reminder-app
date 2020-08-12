import moment from "moment";

export const extractMonthDate = (dateToExtract) => ({
	month: dateToExtract.month() + 1,
	year: dateToExtract.year()
});

export const getPreviousMonth = (month, year) => {
	const prevMonthDateObj = moment(`${year}/${month}/01`, "YYYY-MM-DD").subtract(1, "month");
	const prevMonthDate = extractMonthDate(prevMonthDateObj);

	return prevMonthDate;
};

export const getNextMonth = (month, year) => {
	const nextMonthDateObj = moment(`${year}/${month}/01`, "YYYY-MM-DD").add(1, "month");
	const nextMonthDate = extractMonthDate(nextMonthDateObj);

	return nextMonthDate;
};
export const getDate = (day,month, year) => {
	return moment(`${year}/${month}/${day}`, "YYYY-M-D").format("DD-MM-YYYY");
};
