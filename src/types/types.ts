export interface HTMLElementAttributes extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement | React.ReactElement[]
}

export interface FORMDATA {
    category: 'general' | 'movies' | 'music' | 'sports' | 'video-games';
    // noq = number of questions
    noq: 5|10|15|20;
    time: 0|1|2|5;
    difficulty: 'easy' | 'medium' | 'hard'
}

// Structure of each question result coming from opentdb api
export interface Result {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}