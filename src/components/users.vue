<template>
    <b-col lg="12" v-if="isModalOpen">
        <user-single-modal :user="modalUser" @closeUserModal="closeUserModal"/>
    </b-col>
    <b-col class="pb-5" lg="6" sm="12" v-for="user in users" :key="user.id.value">
        <user :user="user" @openUserModal="openUserModal"/>
    </b-col>
</template>

<script lang="ts">
import { IUser } from '@/interface/user'
import { defineComponent, PropType, ref } from 'vue'
import userSingleModal from './user-single-modal.vue'
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
        user,
        userSingleModal
    },
    setup() {
        const isModalOpen = ref<boolean>(false)
        const modalUser = ref<IUser>({
            gender: '',
            name: {
                title: '',
                first: '',
                last: ''
            },
            dob: {
                date: '',
                age: 0
            },
            email: '',
            phone: '',
            cell: '',
            id: {
                name: '',
                value: ''
            },
            picture: {
                large: '',
                medium: '',
                thumbnail: ''
            }
        })
        const openUserModal = (user: IUser) => { 
            isModalOpen.value = true
            modalUser.value = user
        }
        const closeUserModal = () => {
            isModalOpen.value = false
        }

        return {
            isModalOpen,
            modalUser,
            openUserModal,
            closeUserModal
        }
    }
})
</script>