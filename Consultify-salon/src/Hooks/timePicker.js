import { useState, useEffect } from 'react';

const useTimePicker = () => {
    const [timeRanges, setTimeRanges] = useState([]);

    useEffect(() => {
        const startTime = new Date();
        startTime.setHours(0, 0, 0, 0); // Set the start time to 12:00 AM
        const endTime = new Date();
        endTime.setHours(23, 59, 0, 0); // Set the end time to 11:59 PM
        const ranges = [];

        while (startTime <= endTime) {
            const formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            ranges.push(formattedTime);
            startTime.setTime(startTime.getTime() + 30 * 60 * 1000); // Add 30 minutes
        }

        setTimeRanges(ranges);
    }, []);

  return { timeRanges };
};

export default useTimePicker;