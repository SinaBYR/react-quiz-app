import { ApiQuestionObject, FORMDATA, StageQuestionObject } from "../types/types";

interface STORE_API_DATA {
    apiData: ApiQuestionObject[];
    formData: FORMDATA|null;
}

// interface STORE_RESTRUCTURED_DATA {
//     questions: StageQuestionObject[]
// }

type STORE_RESTRUCTURED_DATA = StageQuestionObject[]

export type ACTIONTYPES =
| { type: "STORE_API_DATA"; payload: STORE_API_DATA }
| { type: "STORE_RESTRUCTURED_DATA"; payload: STORE_RESTRUCTURED_DATA }
| { type: "UPDATE_CURRENT_QUESTION"; payload: STORE_RESTRUCTURED_DATA }
| { type: "START_GAME"}
| { type: "FINISH_GAME"}