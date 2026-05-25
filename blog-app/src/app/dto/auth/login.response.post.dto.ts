import { User } from "../../types/User"

export type LoginResponsePostDto = {
    access_token: string,
    user: User
}