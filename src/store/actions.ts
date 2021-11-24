import { ApiQuestionObject } from "../types/types";

export type ACTIONTYPES =
| { type: "store_data"; payload: ApiQuestionObject[] }
| { type: "increment"; payload: number }
| { type: "decrement"; payload: number };