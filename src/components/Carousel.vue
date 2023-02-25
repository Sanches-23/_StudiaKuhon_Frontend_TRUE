<template>


  <div v-for="product in products" :key="product">
    <img :src="product.main_photo" alt="Sample 1" style="height: 200px">
    <label class="text-black" style="">{{ product.title }}</label>
  </div>

</template>

<script>
import {DefaultAPIInstance} from "../AxiosDefoultOptions/AxiosDfOpt";

export default {
  name: "Carousel",
  data() {
    return {
      products: {},
      next: "",
      previous: "",
    };
  },
  async mounted() {
    try {
      const response = await DefaultAPIInstance.get('products/gallery');
      this.products = response.data
    } catch (e) {
      console.log(e);
    }
  },
}
</script>