function twoDigits(num){
    const digit = parseInt(num)
    if(digit < 10 && digit > -1){
        return "0" + digit;
    }
    else{
        return digit;
    };
}


export function traslate(date){
    const months = {
        Jan: "JAN",
        Feb: "FEV",
        Mar: "MAR",
        Apr: "ABR",
        May: "MAI",
        Jun: "JUN",
        Aug: "JUL",
        Sep: "SET",
        Oct: "OUT",
        Nov: "NOV",
        Dec: "DEZ"
    };
    return months[date];
}

function formatDate(date){
    let dateTime = new Date(`${date}`).toLocaleString();
    const month = traslate(`${dateTime.substring(4,7)}`);

    const day =  twoDigits(dateTime.substring(8,11));
    const NewDate = `${day}/${month}`;

    return NewDate;
}

export default formatDate