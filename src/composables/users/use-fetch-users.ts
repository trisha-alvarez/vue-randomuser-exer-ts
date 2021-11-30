import { UserResults, FetchUserReturn } from "@/interface/user"
import { ExcludedFields } from "@/constants/api-filters"
import { ref } from "@vue/reactivity"

export async function useFetchUsers(): Promise<FetchUserReturn> {
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
        result.value = await fetch(`/api/?exc=${excludedFields}&results=10`).then(res => res.json())
    } catch(e) {
        error.value = (e as Error).message
    }

    loading.value = false
    return { loading, error, result }
}