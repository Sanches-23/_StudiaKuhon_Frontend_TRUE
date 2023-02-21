<template>
  <button v-if="userStore.Token" type="button" class="btn btn-dark mx-3" @click="loguoting">
    Logout
  </button>
  <button v-else type="button" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Login
  </button>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input v-model="login" type="text" placeholder="login" class="my-1 input-group"/><br />
          <input v-model="password" type="text" placeholder="password" class="my-1 input-group"/><br />
          <button @click="logining" class="btn btn-primary mx-1" data-bs-dismiss="modal">Login</button>
        </div>
      </div>
    </div>
  </div>


<!--  <form @submit.prevent="logining">-->
<!--    <label>login</label>-->
<!--    <input type="text" v-model="login" />-->
<!--    <label>Password</label>-->
<!--    <input type="password" v-model="password" />-->
<!--    <button type="submit">Login</button>-->
<!--  </form>-->

</template>

<script>
import {useUserStore} from "@/stores/Auth";

export default {
  name: "LoginElement",
  setup() {
    const userStore = useUserStore();
    return {userStore};
  },
  data(){
    return{
      login: null,
      password: null,
    }
  },
  methods: {
    async logining(){
      await this.userStore.login(this.login, this.password);
    },
    async loguoting(){
      await this.userStore.logout();

    }
  }
}
</script>

<style scoped>

</style>