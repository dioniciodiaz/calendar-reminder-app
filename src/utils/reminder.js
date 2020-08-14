
export const findById = (elementId, elements) => elements.find(element => element.id === elementId);

export const addElement = (elementToAdd, elements) => elements.concat(elementToAdd);

export const updateElementById = (elementId, udpatedElement, elements) => {
	return elements.map(element => (element.id === elementId ? udpatedElement : element));
};

export const removeElementById = (elementId, elements) => {
	return elements.filter(element => element.id !== elementId);
};


export const addReminder = ( reminder, reminders) => {
  const remindersCopy = JSON.parse(JSON.stringify(reminders))
	const { date: reminderDate } = reminder;
	// The empty array is used to initialize the value in case it is still non-existent
	const currentDateReminders = remindersCopy[reminderDate] || [];
	let remindersAfterUpdate = {}
  currentDateReminders.push(reminder);

  remindersAfterUpdate = {
    ...remindersCopy,
    [reminderDate]: sortRemindersByTime(currentDateReminders),
  };
	return remindersAfterUpdate;
};


export const deleteReminder = (reminder, reminders) => {
  const remindersCopy = JSON.parse(JSON.stringify(reminders));
  const { date } = reminder;

	const currentDateReminders = remindersCopy[date] || [];
  const newReminders = removeElementById(reminder.id, currentDateReminders);

  const remindersAfterUpdate = {
    ...remindersCopy,
    [date]: newReminders,
  };
	return remindersAfterUpdate;
};

export const deleteAllReminders = ( date, reminders) => {
  const remindersCopy = JSON.parse(JSON.stringify(reminders));
  const remindersAfterUpdate = {
    ...remindersCopy,
    [date]: [],
  };
	return remindersAfterUpdate;
};

export const updateReminder = (prevReminder, updatedReminder, reminders) => {
	const { date: prevReminderDate } = prevReminder;
  const { date: currentReminderDate } = updatedReminder;
	const isUpdatingDate = prevReminderDate !== currentReminderDate;
	// The empty array is used to initialize the value in case it is still non-existent
	const currentDateReminders = reminders[currentReminderDate] || [];
	let remindersAfterUpdate;

	if (isUpdatingDate) {
		const prevDateReminders = reminders[prevReminderDate];
		const updatedPrevDateReminders = removeElementById(prevReminder.id, prevDateReminders);
		const updatedCurrentDateReminders = addElement(updatedReminder, currentDateReminders);

		remindersAfterUpdate = {
			...reminders,
			[prevReminderDate]: sortRemindersByTime(updatedPrevDateReminders),
			[currentReminderDate]: sortRemindersByTime(updatedCurrentDateReminders)
		};
	} else {
		const updatedCurrentDateReminders = updateElementById(
			updatedReminder.id,
			updatedReminder,
			currentDateReminders
		);

		remindersAfterUpdate = {
			...reminders,
			[currentReminderDate]: sortRemindersByTime(updatedCurrentDateReminders)
		};
	}

	return remindersAfterUpdate;
};


export const sortRemindersByTime = reminders => {
	const sortedReminders = reminders.sort((firstReminder, secondReminder) => {
		const firstReminderTimeValue = firstReminder.time.split(":").join("");
		const secondReminderTimeValue = secondReminder.time.split(":").join("");

		return firstReminderTimeValue - secondReminderTimeValue;
	});

	return sortedReminders;
};


export const extractWeatherData = weatherResponse => {
	const [weatherData] = weatherResponse.weather;
	const { main: weatherType, icon: weatherIconId } = weatherData;
	const extractedWeatherData = {
		type: weatherType,
		imgSource: `http://openweathermap.org/img/wn/${weatherIconId}@2x.png`
	};

	return extractedWeatherData;
};

export const getWheatherByCityName = async(cityName) => {
  const url =`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=77aade2d2d68032076448a1e5b8367a1`;
  try {
    return fetch(url).then(res => res.json());
  } catch (error) {
    return Promise.reject(error);
  }
};
