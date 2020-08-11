import React from 'react';
import moment from "moment";

import './App.css';
import Calendar from "components/Calendar";

function App() {
  const [currentMoth, setCurrentMoth] = React.useState(moment().month());
  const [currentYear, setCurrentYear] = React.useState(moment().year());

  return (
    <div className="App">
     <h1 className="title"> Calendar Reminder App</h1>
     <Calendar  month={(currentMoth + 1)} year={currentYear} />
    </div>
  );
}

export default App;
