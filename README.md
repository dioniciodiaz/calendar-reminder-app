This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Description of `Reminder Calendar app`.

- Ability M add a new "reminder (max 30 chars) for a user entered day and time. Also, include a dry. 
- Display reminders on the calendar view in the coned time order. 
- Allow the user to select color when creating a reminder and display it appropriately. 
- Ability to edit reminders—including changing text, city, day, time and color. 
- Add a weather service call from a free API such as open weather and get the weather forecast for the date of the calendar based on the city. 
- Expand the calendar to support more than the current month. 
- Functionality to delete one or ALL the reminders for a specific day. 



## Libraries

- [react-hook-form](https://github.com/react-hook-form/react-hook-form)
- [react-select](https://github.com/JedWatson/react-select)
- [redux](https://github.com/reduxjs/react-redux)
  - [reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)
  - [redux-persist](https://github.com/rt2zz/redux-persist)
  - [redux-thunks](https://github.com/reduxjs/redux-thunk)
- [styled-components](https://github.com/styled-components/styled-components)
- [uuid](https://github.com/uuidjs/uuid)
- [yup](https://github.com/jquense/yup)
- [moment](https://github.com/moment/moment)

## Structure
I took inspiration from the [reduxjs/toolkit folder recommendation](https://redux-toolkit.js.org/tutorials/intermediate-tutorial#cleanup).

- `/src`
 - `/components`
    - `/calendar`
      - `Day/index.js`
      - `Component..../index.js`
      - `calendarSlice.js`
      - `selectors.js`
      - `index.js`
      - `styles.js`
  - `/constants`
    - `cities.js`
 - `/hooks`
    - `useModal.js`
 - `/store`
    - `index.js`
    - `reducer.js`
 - `/utils`
    - `reminder.js`

## Regrets

When I complete the exercise i was looking at the size of the app and it weight was pretty chunky.  Then I realize that momentjs can not be tree shakable ( it means that if I use only 2% of the functionality It will load all the library just for that). I think that I could use [date-fns](https://github.com/date-fns/date-fns) or [dayjs](https://github.com/iamkun/dayjs) to have a small bundle. Look at the difference in size at this [link](https://www.npmtrends.com/date-fns-vs-day-vs-dayjs-vs-moment).

Another little thing that i notice going through my code was that i could remove the Styled Components Library and use CSS because the components don`t have a complex styling.