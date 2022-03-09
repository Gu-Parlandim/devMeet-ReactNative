function twoDigits(num){
    if(num < 10 && num > -1){
        return "0" + num
    }
    else{
        return num
    }
}

function currentTime(data){
    let informedDate = new Date(data)
    const localDate = new Date()
    const differenceTime = informedDate - localDate
    const days = twoDigits(Math.floor(differenceTime /1000 /60 /60 / 24))
    const hours = twoDigits(Math.floor(differenceTime /1000 /60 /60) % 24)
    const minutes = twoDigits(Math.floor(differenceTime /1000 /60) % 60)
    const seconds = twoDigits(Math.floor(differenceTime /1000) % 60)
    return {days, hours, minutes,  seconds,  differenceTime}
}

export default currentTime; 

