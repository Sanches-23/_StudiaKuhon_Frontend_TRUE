<template>
  <h1>Products</h1>


  <div class="row mx-5">
    <div class="col-8 border">
      <section style="background-color: #eee">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div
                class="col-md-8 col-lg-6 col-xl-4"
                v-for="product in products"
                :key="product"
            >
              <product-card :product="product"></product-card>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>


</template>

<script>
import {DefaultAPIInstance} from "@/AxiosDefoultOptions/AxiosDfOpt";
import ProductCard from "@/components/ProductCard.vue";


export default {
  name: "ProductView",
  components: {ProductCard},
  data() {
    return {
      products: {},
      next: "",
      previous: "",
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await DefaultAPIInstance.get('products/');
        this.products = response.data.results;
        this.next = response.data.next;
        this.previous = response.data.previous;
      } catch (e) {
        console.log('err404');
      }
    }
  },
  async mounted() {
    await this.fetchProducts();
  },
}
</script>

<style scoped>

</style>