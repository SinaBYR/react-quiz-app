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
| { type: "STORE_ERROR_DATA", payload: string|null }
| { type: "UPDATE_CURRENT_QUESTION"; payload: STORE_RESTRUCTURED_DATA }
| { type: "UPDATE_REMAINING_TIME", payload: number|null}
| { type: "START_GAME"}
| { type: "FINISH_GAME"}
| { type: "START_NEW_GAME" }