function formatTime(dateTime){
    const time = new Date(`${dateTime}`).toLocaleTimeString("pt-Bt", {hour: "numeric",minute: "numeric"}).toString();
    return time.substring(0,5);
}

export default formatTime