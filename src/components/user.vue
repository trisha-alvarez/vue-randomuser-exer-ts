<template>
    <b-card no-body class="overflow-hidden border-0 user-card" @click="openUserModal()">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="imgSrc" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body>
                    <b-card-title :class="borderColor">{{ fullName }}</b-card-title>
                    <b-card-text>
                        <small>{{ userInfo }}</small><br>
                        <p class="pt-3">{{ userEmail }}</p>
                        <small>{{ userPhone }}</small><br>
                        <small>{{ userCell }}</small>
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
    setup(props, {emit}) {
        const imgSrc = computed((): string => {
            return props.user.picture.large
        })
        const fullName = computed((): string => {
            return props.user.name.first + ' ' + props.user.name.last
        })
        const formatDate = computed((): string => {
            return moment(String(props.user.dob.date)).format('MMMM DD, YYYY')
        })
        const userInfo = computed((): string => {
            return props.user.gender + ' / ' + props.user.dob.age + ' / ' + formatDate.value
        })
        const userEmail = computed((): string => {
            return props.user.email
        })
        const userPhone = computed((): string => {
            return props.user.phone
        })
        const userCell = computed((): string => {
            return props.user.cell
        })
        const borderColor = computed((): string => {
            return (props.user.gender === 'male') ? 'header-blue' : 'header-yellow'
        })

        function openUserModal() {
            emit('openUserModal', props.user)
        }

        return {
            imgSrc,
            fullName,
            userInfo,
            userEmail,
            userPhone,
            userCell,
            borderColor,
            openUserModal
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

h4:hover {
    color: #FCE16D;
}

h4, img {
    cursor: pointer;
}
.user-card {
    max-width: 540px;
}
</style>
