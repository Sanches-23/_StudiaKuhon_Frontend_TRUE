<template>
  <h1>Products</h1>

  <div class="row mx-5">
    <div class="col-3 border text-start">
      <sidebar-filter @filter-change="updateFilter"></sidebar-filter>
    </div>
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
          <!--          для переключення сторінок списку-->
          <button type="button" class="btn btn-danger mx-1" @click="">[===</button>
          <button type="button" class="btn btn-danger mx-1" @click="">===]</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {DefaultAPIInstance} from "@/AxiosDefoultOptions/AxiosDfOpt";
import SidebarFilter from "@/components/SidebarFilter.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductView",
  components: {ProductCard, SidebarFilter},
  data() {
    return {
      filter: "",
      products: {},
      next: "",
      previous: "",
    };
  },
  methods: {
    updateFilter: async function (e) {
      this.filter = e;
      await this.fetchProducts();
    },
    async fetchProducts() {
      try {
        const response = await DefaultAPIInstance.get( 'design_shop/products/' + this.filter);
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

<style scoped></style>