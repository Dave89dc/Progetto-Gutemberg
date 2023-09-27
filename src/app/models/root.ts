import { Book } from "./book"

export interface Root {
    count: number
    next: string
    previous: any
    results: Book[]
}