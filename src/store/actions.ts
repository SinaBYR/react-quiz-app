export type ACTIONTYPE =
| { type: "increment"; payload: number }
| { type: "decrement"; payload: number };