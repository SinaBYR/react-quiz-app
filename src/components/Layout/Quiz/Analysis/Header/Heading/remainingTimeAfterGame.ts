export const remainingTimeAfterGame = (timer: number): string => {
    let minutes = Math.floor((timer / 60))
    let seconds = (timer % 60)


    if(timer < 15) {
        return `You finished the quiz early. ${seconds}s saved.`
    }

    if(timer < 30) {
        return `It was fast. You saved ${seconds}s`
    }

    if(timer <= 60) {
        return `WOW, Good job! ${seconds}s time saved.`
    }

    if(timer > 60) {
        return `You absolutely killed it! ${minutes}m and ${seconds}s saved`
    }

    return `${minutes} minutes and ${seconds} seconds`
}