export function parseTime(dateTime) {
    // check if date time is a DATE object 
    // if yes proceed on parsing
    // if not show an error
    if (dateTime instanceof Date) { //if given params is a date object
        let today = dateTime,
            month = today.getMonth() + 1,
            year = today.getFullYear(),
            date = today.getDate(),
            // fullDate = `${month}/${year}/${date}`,
            hours = today.getHours(),
            minutes = today.getMinutes(),
            seconds = today.getSeconds();

        //12 hr format
        var amPm = "am";
        if (hours > 12) {
            amPm = "pm";
            hours = hours - 12;
        }

        //put 0 before single-digit numbers 
        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        //display dateTime
        dateTime = `${month}/${year}/${date} ${hours}:${minutes}:${seconds}${amPm}`
        const parsedDateTime = JSON.stringify(dateTime)
        return parsedDateTime;
    }
    return undefined;
}