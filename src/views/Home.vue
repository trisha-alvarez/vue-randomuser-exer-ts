<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <div class="row" v-if="users">
    <users :users="users"/>
  </div>
</template>

<script lang="ts">
import { IUser } from '../interface/user';
import { defineComponent, onMounted, ref } from 'vue'
import { fetchUsers } from '../composables/use-user';
import users from '../components/users.vue'

export default defineComponent({
  name: 'Home',
  components: {
    users
  },
  setup() {
    const users = ref<IUser[]>([])
    onMounted( async () => {
      try {
        users.value = await fetchUsers()
      } catch (e) {
        alert('Error! \n' + e)
      }
    })

    return {
      users
    }
  }
});
</script>
