export type Blog = {
    id: string|number,
    date: Date,
    title: string,
    text: string,
    image: string|null,
    rating: number,
    categoryId?: string|null
}