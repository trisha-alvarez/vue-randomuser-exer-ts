<template>
    <b-col class="pb-5" lg="6" sm="12" v-for="user in users" :key="user.id.value">
        <user :user="user"/>
    </b-col>
</template>

<script lang="ts">
import { IUser } from '@/interface/user'
import { defineComponent, PropType } from 'vue'
import user from './user.vue'

export default defineComponent({
    name: 'users',
    props: {
        users: {
            type: Array as PropType<IUser[]>,
            required: true
        }
    },
    components: {
        user
    }
})
</script>

