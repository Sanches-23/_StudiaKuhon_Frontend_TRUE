<template>
  <h1>Home</h1>
  <h1>{{ AuthStore.Token }}</h1>
  <br>

  <hr>

  <div class="container">
    <div class="accordion" id="accordionExample">

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
            Gallery
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <Carousel/>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false" aria-controls="collapseTwo">
            Custom Order
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <!--          <CustomOrder></CustomOrder>-->
          </div>
        </div>
      </div>

    </div>
  </div>

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
  components: {Carousel},
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