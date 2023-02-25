<template>
  <h1>Home</h1>
  <h1>{{ AuthStore.Token }}</h1>
  <br>


  <!--  //////////////////////-->

  <div>
    <!--  left - need any img-->
    <h1>Шукаєте індивідуальний підхід?</h1>
    <p>Ми розробляємо наші проєкти, враховуючи особливості об’єкта, можливості та смаки замовника, його бачення та цілі.
      Розробляємо проекти як частини об’єкту так і під ключ. </p>
  </div>

  <div class="row-cols-6">
    <input v-model="firstName" type="text" placeholder="Ім'я" class="my-1 input"/><br/>
    <input v-model="phoneNumber" type="text" placeholder="Номер телефона" class="my-1 input"/><br/>
    <input v-model="email" type="text" placeholder="E-mail" class="my-1 input"/><br/>
    <!--    <button @click="WishList.custOrder()" class="btn btn-dark mx-1" data-bs-dismiss="modal">Замовити консультацію</button>-->
    <button @click="customOrder" class="btn btn-primary mx-1">Зробити
      замовлення
    </button>
  </div>

</template>

<script>
import {useUserStore} from "@/stores/Auth";
import {DefaultAPIInstance} from "@/AxiosDefoultOptions/AxiosDfOpt";

export default {
  name: "HomeView",
  data() {
    return {
      firstName: null,
      phoneNumber: null,
      email: null,
    }
  },
  methods: {
    customOrder() {
      const message = `-------------------------\nІм'я: ${this.firstName}\nНомер телефона: ${this.phoneNumber}\nE-mail: ${this.email}\n-------------------------\n`;
      DefaultAPIInstance.post('order', {'message': message, 'user': false})
          .catch(e => console.log(e));
    },
  },
  setup() {
    const AuthStore = useUserStore();
    return {AuthStore};
  }
}
</script>

<style scoped></style>