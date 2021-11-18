<template>
    <b-card no-body class="overflow-hidden border-0" style="max-width: 540px;">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="$props.user.picture.large" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body>
                    <b-card-title :class="borderColor">{{ fullName }}</b-card-title>
                    <b-card-text>
                        <small><i>{{ $props.user.gender }} / {{ $props.user.dob.age }} / {{ formatDate }}</i></small><br>
                        <p class="pt-2">{{ $props.user.email }}</p>
                        <small>{{ $props.user.phone }}</small><br>
                        <small>{{ $props.user.cell }}</small>
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
  </b-card>
</template>

<script lang="ts">
import { IUser } from '@/interface/user'
import { defineComponent, PropType, computed } from 'vue'
import moment from 'moment'

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

        const formatDate = computed((): string => {
            return moment(String(props.user.dob.date)).format('MMMM DD, YYYY')
        })

        const borderColor = computed((): string => {
            return (props.user.gender === 'male') ? 'header-blue' : 'header-yellow'
        })

        return {
            fullName,
            formatDate,
            borderColor
        }
    }
})
</script>

<style scoped>
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

h4 {
    font-family: 'Shippori Antique', sans-serif;
    font-size: 2rem;
    width: fit-content;
    margin: 0;
    line-height: 1;
}
</style>
