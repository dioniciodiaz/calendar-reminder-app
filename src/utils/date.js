import moment from "moment";

export const extractMonthDate = (dateToExtract) => ({
	month: dateToExtract.month() + 1,
	year: dateToExtract.year()
});

export const getPreviousMonthAndYear = (month, year) => {
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

export const getCardinalNumberOfDate = (date) => {
	return moment(date, "YYYY-MM-DD").format("D");
};

export const formatDate = (date) => {
	return moment(date, "YYYY-MM-DD").format();
};

export const getDatesArray = (startDate, stopDate)=> {
  var dateArray = [];
  var currentDate = moment(startDate);
  var stopDate = moment(stopDate);
  while (currentDate <= stopDate) {
      dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
      currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
}
