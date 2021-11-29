

export const remainingTime = (t: number): string => {
    let timer: number = t, minutes: string, seconds: string;

    minutes = Math.floor((timer / 60)).toString()
    seconds = (timer % 60).toString()

    seconds = +seconds < 10 ? "0" + seconds : seconds;

    return `${minutes} : ${seconds}`
}