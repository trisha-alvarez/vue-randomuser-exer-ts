import { IUser, UserResults } from "@/interface/user"
import { ExcFields } from "@/constants/api-filters"

export async function fetchUsers(): Promise<UserResults> {
    const exc = ExcFields.toString()
    const data: UserResults = await fetch(`/api/?exc=${exc}&results=10`).then(res => res.json())
    return data
}

export async function fetchUsersByPage(page: number, seed: string): Promise<UserResults> {
    const exc = ExcFields.toString()
    const data: UserResults = await fetch(`/api/?exc=${exc}&page=${page}&results=10&seed=${seed}`).then(res => res.json())
    return data
}

export async function fetchUser(id: string): Promise<IUser> {
    const data: IUser = await fetch(`/api/?results=${id}`).then(res => res.json())
    return data
}