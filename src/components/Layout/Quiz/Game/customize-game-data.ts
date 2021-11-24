import { ApiQuestionObject, StageQuestionObject } from "../../../../types/types"

// Fisher–Yates Array Shuffle Algorithm
const shuffle = <Type>(arr: Type[]): Type[] => {
    let currentIndex = arr.length, randomIndex: number, temp: Type

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        temp = arr[currentIndex]
        arr[currentIndex] = arr[randomIndex]
        arr[randomIndex] = temp
    }

    return arr
}

// Restructure questions data coming from api into StageQuestionObject.
export const restructure = (questions: ApiQuestionObject[]) => {
    const newGameData: StageQuestionObject[] = []
    questions.forEach((res, i) => {
        // - To remove duplicated answers (sometimes same values appear more than once in incorrect_answers array coming from api)
        // I use new Set to remove duplicated answers in the array.
        // - For example ===> incorrect_answers: ['2005', '2005', '2005', '2005', '2012', '2014', '2001']
        const incorrectAnswersSet = new Set(res.incorrect_answers)
        // - Convert set into an array.
        const allAnswersArr = Array.from(incorrectAnswersSet)
        // - Insert correct answer into the allAnswersArr
        // - I'll use this allAnswersArr to generate RadioButtons.
        allAnswersArr.push(res.correct_answer)
        // - Shuffle values inside allAnswersArr
        const shuffledAllAnswers = shuffle(allAnswersArr)
        newGameData[i] = {
            stage: i,
            question: res.question,
            answer: null,
            isCorrect: undefined,
            correctAnswer: res.correct_answer,
            incorrect_answers: res.incorrect_answers,
            allAnswers: shuffledAllAnswers
        }
    })
    return newGameData
}