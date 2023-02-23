<template>
  <h1>Home</h1>
  <h1>{{ AuthStore.Token }}</h1>



</template>

<script>
import {useUserStore} from "@/stores/Auth";
export default {
  name: "HomeView",
  setup() {
    const AuthStore = useUserStore()
    return { AuthStore }
  }
}
</script>

<style scoped>

</style>