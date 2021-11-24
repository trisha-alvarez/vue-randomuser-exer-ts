<template>
    <div id="modal-user" class="modal fade show d-block" tabindex="-1" role="dialog" data-show="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <b-card no-body>
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="imgSrc" alt="Image" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body>
                                <b-card-text>
                                    <h1 :class="borderColor">{{ fullName }}</h1>
                                    <h5>basic info</h5>
                                    <p>gender: {{ userGender }}</p>
                                    <p>birthday: {{ userDob }}</p>
                                    <p>age: {{ userAge }}</p>
                                    <hr>
                                    <h5>contact info</h5>
                                    <p>email: {{ userEmail }}</p>
                                    <p>telephone: {{ userPhone }}</p>
                                    <p>cellphone: {{ userCell }}</p>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <button type="button" class="btn btn-lg w-100 btn-blue" @click="closeUserModal">close</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { IUser } from '@/interface/user'
import { defineComponent, PropType, computed } from 'vue'
import moment from 'moment'

export default defineComponent({
    name: 'userSingleModal',
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
            return props.user.name.title + '. ' + props.user.name.first + ' ' + props.user.name.last
        })
        const userGender = computed((): string => {
            return props.user.gender
        })
        const userDob = computed((): string => {
            return moment(String(props.user.dob.date)).format('MMMM DD, YYYY')
        })
        const userAge = computed((): number => {
            return props.user.dob.age
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
        const closeUserModal = () => {
            emit('closeUserModal', true)
        }

        return {
            imgSrc,
            fullName,
            userGender,
            userDob,
            userAge,
            userEmail,
            userPhone,
            userCell,
            borderColor,
            closeUserModal
        }
    },
})
</script>

<style scoped>
#modal-user {
    background: rgba(49, 49, 49, 0.555);
}
.modal-dialog {
    max-width: 75vw;
}

h1 {
    font-family: 'Shippori Antique', sans-serif;
}

p {
    margin: 0;
}

.btn {
    cursor: pointer;
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    text-align: right;
}
.btn-blue {
    background: #2c3e50;
    color: #fff;
}
</style>