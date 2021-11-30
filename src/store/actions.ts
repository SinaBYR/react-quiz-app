import { ApiQuestionObject, FORMDATA } from "../types/types";

interface STORE_DATA {
    result: ApiQuestionObject[];
    formData: FORMDATA|null;
}

export type ACTIONTYPES =
| { type: "store_data"; payload: STORE_DATA }
| { type: "GAME_FINISHED"}