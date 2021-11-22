import { Ref } from "@vue/reactivity"

export interface IUser {
    gender: string
    name: {
        title: string
        first: string
        last: string
    }
    dob: {
        date: string
        age: number
    }
    email: string
    phone: string
    cell: string
    id: {
        name: string
        value: string
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
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