function twoDigits(numero){
    if(numero < 10 && numero > -1){
        return "0" + numero
    }
    else{
        return numero
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

