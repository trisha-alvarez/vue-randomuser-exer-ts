<template>
    <nav class="navbar navbar-expand-lg navbar-light justify-content-between mb-5">
        <h5 class="m-0">filters</h5>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link disabled">gender</a>
                <a class="nav-item nav-link" @click="filterGender(genderVal)" v-for="genderVal in genders" :key="genderVal">
                    <span :class="isActive(genderVal)">{{ genderVal }}</span>
                </a>
                <a class="nav-item nav-link disabled">no. of results</a>
                <a class="nav-item nav-link" @click="filterNoOfResults(NoOfResultsVal)" v-for="NoOfResultsVal in NoOfResults" :key="NoOfResultsVal">
                    <span :class="isActive(NoOfResultsVal)">{{ NoOfResultsVal }}</span>
                </a>
                <a class="nav-item nav-link active" @click="filterReset()">reset</a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NoOfResults } from '@/constants/number-results'

export default defineComponent({
    name: 'filters',
    props: {
        gender: {
            type: String,
            required: true
        },
        noOfResults: {
            type: Number,
            required: true
        }
    },
    setup(props, { emit }) {
        const currentGender = ref(props.gender)
        const genders = ref<Array<string>>([
            'all',
            'female',
            'male'
        ])
        const currentNoOfResults = ref(props.noOfResults)

        function isActive(val: string | number): string {
            return (val === currentGender.value || val === currentNoOfResults.value) ? 'header-blue' : ''
        }
        function filterReset(): void {
            currentGender.value = 'all'
            currentNoOfResults.value = 10
            emitRefetchUsers()
        }
        function filterGender(newGender: string): void {
            currentGender.value = newGender
            emitRefetchUsers()
        }
        function filterNoOfResults(newNoOfResults: number): void {
            currentNoOfResults.value = newNoOfResults
            emitRefetchUsers()
        }
        function emitRefetchUsers(): void {
            emit('refetchUsers', currentGender.value, currentNoOfResults.value)
        }

        return {
            genders,
            NoOfResults,
            isActive,
            filterReset,
            filterGender,
            filterNoOfResults
        }
    },
})
</script>

<style scoped>
.nav-item{
    cursor: pointer;
}

.nav-item:hover {
    color: #FCE16D !important;
}
</style>
