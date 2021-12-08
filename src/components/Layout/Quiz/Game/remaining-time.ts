

export const remainingTime = (t: number): string => {
    // 1 - When t is equal to 0, we eventually want to finish the game, but
    // for a fraction of a second, -1 gets passed into this function, so
    // the returned value would be equal to "-01 : 01".
    
    // 2 - To avoid that, we first check if t is smaller than 0.
    if(t < 0) {
        return '0 : 00'
    }
    
    let timer: number = t, minutes: string, seconds: string;

    minutes = Math.floor((timer / 60)).toString()
    seconds = (timer % 60).toString()

    seconds = +seconds < 10 ? "0" + seconds : seconds;

    return `${minutes} : ${seconds}`
}