import { UserResults, FetchUserReturn } from "@/interface/user"
import { ExcludedFields } from "@/constants/api-filters"
import { ref } from "@vue/reactivity"

export async function useFetchUsersByFilter(page: number, results: number, gender: string, seed: string): Promise<FetchUserReturn> {
    const excludedFields = ExcludedFields.toString()
    const loading = ref<boolean>(true)
    const error = ref<string>('')
    const result = ref<UserResults>({
        results: [],
        info: {
            seed: '',
            results: 1,
            page: 1
        }
    })
    
    try {
        if(gender === 'all') {
            result.value = await fetch(`/api/?exc=${excludedFields}&page=${page}&results=${results}&seed=${seed}`).then(res => res.json())
        } else {
            result.value = await fetch(`/api/?exc=${excludedFields}&page=${page}&results=${results}&gender=${gender}`).then(res => res.json())
        }
        
    } catch(e) {
        error.value = (e as Error).message
    }

    loading.value = false
    return { loading, error, result }
}