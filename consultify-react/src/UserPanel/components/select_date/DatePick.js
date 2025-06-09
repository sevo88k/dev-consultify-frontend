import React from 'react'
import { useEffect } from 'react';
function DatePick() {
    const [selectDate, setSelectDate] = React.useState('');
    console.log('dsssss',selectDate)
    const PickerChange = (e) => {
        e.preventDefault()
        setSelectDate(e.target.value);
        console.log('date pick',e.target.value);
    }
  return (
    <div>
 <div className="d-flex justify-content-between align-items-center ques_detail-inner mb-2">
                              <p className="mb-0">Select a Date</p>
                              <div className="options_part date-picker">
                                <form action="">
                                  <input type="date" name="date" value={selectDate} onChange={PickerChange}/>
                                </form>
                              </div>
                            </div>
    </div>
  )
}

export default DatePick;
