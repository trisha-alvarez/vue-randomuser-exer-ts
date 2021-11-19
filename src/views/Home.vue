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
import { IUser, UserResults } from '@/interface/user'
import { fetchUsers, fetchUsersByPage } from '@/composables/use-user'
import users from '@/components/users.vue'

export default defineComponent({
  name: 'Home',
  components: {
    users
  },
  setup() {
    const results = ref<UserResults>({
      results: [],
      info: {
        seed: '',
        results: 1,
        page: 1
      }
    })
    const users = ref<IUser[]>([])
    const usersSeed = ref<string>('')
    const rows = ref<number>(100)
    const page = ref<number>(1)

    onMounted( async () => {
      try {
        results.value = await fetchUsers()
        users.value = results.value.results
        usersSeed.value = results.value.info.seed
      } catch (e) {
        alert('Error! \n' + e)
      }
    })

    watch(page, async () => {
      try {
        results.value = await fetchUsersByPage(page.value, usersSeed.value)
        users.value = results.value.results
      } catch (e) {
        alert('Error! \n' + e)
      }
    })

    return {
      users,
      rows,
      page
    }
  }
})
</script>
