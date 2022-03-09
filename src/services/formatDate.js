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
    }
    return months[date]
}

function formatDate(date){
    let dateTime = new Date(`${date}`).toLocaleString()
    const month = traslate(`${dateTime.substring(4,7)}`)

    const NewDate = `${dateTime.substring(8,11)}/${month}`;
    return NewDate;
}

export default formatDate