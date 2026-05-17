export type BlogResponseGetDto = {
    id: string,
    title: string,
    content: string,
    categoryId: string|null,
    createdAt: string,
    imgSrc: string,
    rating: number,
    updatedAt: string
}