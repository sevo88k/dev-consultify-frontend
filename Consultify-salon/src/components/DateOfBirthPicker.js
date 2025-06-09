// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DateOfBirthPicker = ({dob,setDOB}) => {


//   return (
//     <div>
//       <DatePicker
//         selected={dob}
//         onChange={(date) => setDOB(date)}
//         showYearDropdown
//         dateFormatCalendar="MMMM"
//         yearDropdownItemNumber={100}
//         scrollableYearDropdown
//         maxDate={new Date()}
//         placeholderText="Please Select DOB"
//         dateFormat="dd/MM/yyyy"
//       />

//     </div>
//   );
// };

// export default DateOfBirthPicker;




import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateOfBirthPicker = ({ dob, setDOB }) => {
  return (
    <div>
      <DatePicker
        id="dob-picker"
        selected={dob}
        onChange={(date) => setDOB(date)}
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        dateFormatCalendar="MMMM"
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        maxDate={new Date()}
        placeholderText="Select your date of birth"
        dateFormat="dd/MM/yyyy"
        className="date-picker-input"
        popperPlacement="bottom-start"
        clearButtonTitle="Clear selection"
        ariaLabelledBy="dob-picker-label"
      />
    </div>
  );
};

export default DateOfBirthPicker;