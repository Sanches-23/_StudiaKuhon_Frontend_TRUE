<template>
  <div class="card text-black px-3 my-2">
    <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
    <img :src="product.main_photo" class="card-img" :alt="product.title" />
    <div class="card-body">
      <div class="text-start">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="text-muted mb-4">
          {{ product.description_shorted }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: () => ({
        id: Number,
        title: String,
        description_shorted: String,
        main_photo: String,
      }),
    },
  }

}
</script>
<style scoped></style>