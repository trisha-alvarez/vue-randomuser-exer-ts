import { Ref } from "@vue/reactivity"

export interface IUser {
    gender: string
    name: IName,
    dob: IDob,
    email: string
    phone: string
    cell: string
    id: IUserID,
    picture: IPicture
}

export interface IName {
    title: string
    first: string
    last: string
}

export interface IDob {
    date: string
    age: number
}

export interface IUserID {
    name: string
    value: string
}

export interface IPicture {
    large: string
    medium: string
    thumbnail: string
}

export type UserResults = {
    results: Array<IUser>,
    info: {
        seed: string
        results: number
        page: number
    }
}

export type FetchUserReturn = { 
    loading: Ref<boolean>, 
    error: Ref<String>, 
    result: Ref<UserResults> 
}