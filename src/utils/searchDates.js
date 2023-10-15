import dayjs from "dayjs";

const today = dayjs();
const tomorrow = today.add(1, 'day');
const oneYearFromNow = today.add(1, 'year');
const max = oneYearFromNow.toDate(); 


export const searchDates = [
        {
            id: "date-start",
            label: "Check In",
            name: "trip-start",
            //min: "2023-01-01",
            //max: {max},
            defaultValue: {today}
            
        },
        {
            id: "date-end",
            label: "Check Out",
            name: "trip-end",
            // min:"2023-01-01",
            //max: {max},
            defaultValue: {tomorrow}
            
        },
    ];