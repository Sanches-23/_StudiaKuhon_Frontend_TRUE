<template>
<!--  <button v-if="userStore.authToken" type="button" class="btn btn-dark mx-3" @click="Loguoting">-->
<!--    Logout-->
<!--  </button>-->
<!--  <button v-else type="button" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
<!--    Login-->
<!--  </button>-->

  <button  type="button" class="btn btn-danger mx-3" @click="Loguoting">
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
          <input v-model="login" type="text" placeholder="login" class="my-1 input-group"/><br />
          <input v-model="password" type="text" placeholder="password" class="my-1 input-group"/><br />
          <button @click="Logining" class="btn btn-primary mx-1" data-bs-dismiss="modal">Login</button>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="btn btn-dark mx-3" data-bs-toggle="modal" data-bs-target="#registrationBtn">
    Registration
  </button>

  <div class="modal fade" id="registrationBtn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input v-model="email" type="text" placeholder="email" class="my-1 input-group"/><br />
          <input v-model="login" type="text" placeholder="login" class="my-1 input-group"/><br />
          <input v-model="password" type="text" placeholder="password" class="my-1 input-group"/><br />
          <button @click="Registration" class="btn btn-primary mx-1" data-bs-dismiss="modal">Sign up</button>
        </div>
      </div>
    </div>
  </div>

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
      email: null,
      login: null,
      password: null,
    }
  },
  methods: {
    async Logining(){
      await this.userStore.Login(this.login, this.password);
    },
    async Loguoting(){
      await this.userStore.Logout();
    },
    async Registration(){
      await this.userStore.SignUp(this.email, this.login, this.password);
    }
  }
}
</script>

<style scoped>

</style>