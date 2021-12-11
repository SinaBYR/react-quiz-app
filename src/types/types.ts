export interface FORMDATA {
    category: 'general' | 'movies' | 'music' | 'sports' | 'video-games';
    // noq = number of questions
    noq: '5'|'10'|'15'|'20';
    time: '0'|'60'|'120'|'300';
    level: 'easy' | 'medium' | 'hard'
}

// Structure of each question result coming from opentdb api
export interface ApiQuestionObject {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export interface StageQuestionObject {
    stage: number;
    question: string;
    answer: string|null;
    isCorrect: boolean|null;
    correctAnswer: string;
    incorrect_answers: string[];
    allAnswers: string[]
}