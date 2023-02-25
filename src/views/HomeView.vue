<template>
  <h1>Home</h1>
  <h1>{{ AuthStore.Token }}</h1>

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


</template>

<script>
import {useUserStore} from "@/stores/Auth";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "HomeView",
  components: {Carousel},
  setup() {
    const AuthStore = useUserStore()
    return {AuthStore}
  }
}
</script>

<style scoped></style>