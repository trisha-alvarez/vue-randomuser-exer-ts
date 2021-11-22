<template>
  <div class="home">
    <b-row align-h="around" v-if="users">
      <users :users="users"/>
    </b-row>
    <b-row align-h="center">
      <b-pagination v-model="page" :total-rows="rows" align="fill"></b-pagination>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { IUser } from '@/interface/user'
import { useFetchUsers, useFetchUsersByFilter } from '@/composables/users/index'
import users from '@/components/users.vue'

export default defineComponent({
  name: 'Home',
  components: {
    users
  },
  setup() {
    // results
    const users = ref<IUser[]>([])
    const usersSeed = ref<string>('')

    // filters
    const gender = ref<string>('all')
    const noOfResults = ref<number>(10)
    const page = ref<number>(1)
    const rows = ref<number>(100)

    onMounted( async () => {
      const { result } = await useFetchUsers()
      users.value = result.value.results
      usersSeed.value = result.value.info.seed
    })

    watch({gender, noOfResults, page}, async () => {
      const { result } = await useFetchUsersByFilter(page.value, noOfResults.value, gender.value, usersSeed.value)
      users.value = result.value.results
    })

    return {
      users,
      rows,
      page
    }
  }
})
</script>
