import { Author } from "./author"
import { Formats } from "./formats"
import { Translator } from "./translator"

export interface Book {
    id: number
    title: string
    authors: Author[]
    translators: Translator[]
    subjects: string[]
    bookshelves: string[]
    languages: string[]
    copyright: boolean
    media_type: string
    formats: Formats
    download_count: number
}