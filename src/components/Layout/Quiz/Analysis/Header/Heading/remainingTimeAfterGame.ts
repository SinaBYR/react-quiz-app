export const remainingTimeAfterGame = (timer: number) => {
    let minutes = Math.floor((timer / 60))
    let seconds = (timer % 60)


    if(seconds && !minutes) {
        return `${seconds} second(s)`
    }

    if(minutes && !seconds) {
        return `${minutes} minute(s)`
    }

    return `${minutes} minute(s) and ${seconds} second(s)`
}