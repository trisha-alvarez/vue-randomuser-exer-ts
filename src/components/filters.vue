<template>
    <b-nav>
        <b-nav-item @click="filterReset()">reset</b-nav-item>

        <li class="nav-item dropdown">
            <b-dropdown-item @click="filterGender(genderVal)" v-for="genderVal in genders" :key="genderVal">
                {{ genderVal }}
            </b-dropdown-item>
        </li>

        <b-nav-item-dropdown text="number of results" right>
            <b-dropdown-item @click="filterNoOfResults(noOfResultsVal)" v-for="noOfResultsVal in nosOfResults" :key="noOfResultsVal">
                {{ noOfResultsVal }}
            </b-dropdown-item>
        </b-nav-item-dropdown>
    </b-nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
        const nosOfResults = ref<Array<number>>([10, 20, 50, 100, 120, 150, 200])

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
            nosOfResults,
            filterReset,
            filterGender,
            filterNoOfResults
        }
    },
})
</script>
