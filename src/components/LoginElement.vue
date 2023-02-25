<template>

  <button  type="button" class="btn btn-danger mx-3" @click="logout">
    Logout
  </button>
  <button type="button" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
          <input v-model="username" type="text" placeholder="username" class="my-1 input-group"/><br />
          <input v-model="password" type="text" placeholder="password" class="my-1 input-group"/><br />
          <button @click="login" class="btn btn-primary mx-1" data-bs-dismiss="modal">Login</button>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="btn btn-dark mx-3" data-bs-toggle="modal" data-bs-target="#registrationBtn">
    Sign up
  </button>

  <div class="modal fade" id="registrationBtn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Sign up</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input v-model="email" type="text" placeholder="email" class="my-1 input-group"/><br />
          <input v-model="username" type="text" placeholder="login" class="my-1 input-group"/><br />
          <input v-model="password" type="text" placeholder="password" class="my-1 input-group"/><br />
          <button @click="register" class="btn btn-primary mx-1" data-bs-dismiss="modal">Sign up</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {useUserStore} from "@/stores/Auth";

export default {
  name: "LoginElement",
  data(){
    return{
      email: null,
      username: null,
      password: null,
    }
  },
  methods: {
    async login(){
      await this.userStore.login(this.username, this.password);
    },
    async logout(){
      await this.userStore.logout();
    },
    async register(){
      await this.userStore.register(this.email, this.username, this.password);
    }
  },
  setup() {
    const userStore = useUserStore();
    return {userStore};
  },
}
</script>

<style scoped>

</style>