<template>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
        <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
            <b-card-body :title="fullName">
            <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
            </b-card-text>
            </b-card-body>
        </b-col>
        </b-row>
  </b-card>
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
