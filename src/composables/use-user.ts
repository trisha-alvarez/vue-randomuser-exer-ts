import { IUser, UserResults } from "@/interface/user"
import { ExcFields } from "@/constants/api-filters"

export async function fetchUsers(): Promise<IUser[]> {
    const exc = ExcFields.toString()
    const data: UserResults = await fetch(`/api/?exc=${exc}&results=10&noinfo`).then(res => res.json())
    return data.results
}

export async function fetchUser(id: string): Promise<IUser> {
    const data: IUser = await fetch(`/api/?results=${id}`).then(res => res.json())
    return data
}