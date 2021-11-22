import { Result } from "../types/types";

export type ACTIONTYPES =
| { type: "store_data"; payload: Result[] }
| { type: "increment"; payload: number }
| { type: "decrement"; payload: number };