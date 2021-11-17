<template>
    <h1>User</h1>
    <div>
        {{fullName}}
    </div>
</template>

<script lang="ts">
import { IUser } from '@/interface/user'
import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
    name: 'user',
    props: {
        user: {
            type: Object as PropType<IUser>,
            required: true
        }
    },
    setup(props) {
        const fullName = computed((): string => {
            return props.user.name.first + ' ' + props.user.name.last
        })

        return {
            fullName
        }
    }
})
</script>
