<template>
  <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="row">
<!--            Photo section-->
            <div class="col-md-6">
              <div class="images p-3">

                <div class="text-center p-4">
                  <img id="main-image" :src="product.main_photo" width="450"/>
                </div>

                <div class="thumbnail text-center" v-for="photo in product.gallery" :key="photo">
                  <img onclick="" :src="photo.url" width="70">
                </div>

              </div>
            </div>

            <div class="col-md-6">
              <div class="product p-4">

                <div class="d-flex justify-content-between align-items-center">

                  <div class="d-flex align-items-center"><i class="fa fa-long-arrow-left"></i>
                    <a class="ml-1" @click="this.$router.push({name: 'products'})">Back</a>
                  </div>
                  <i class="fa fa-shopping-cart text-muted"></i>

                </div>

                <div class="mt-4 mb-3">
                  <h5 class="text-uppercase text-start mx-2">{{ product.title }}</h5>
                </div>

                <p class="about">{{ product.description_full }}</p>

                <div class="cart mt-4 align-items-center">
                  <button class="btn btn-danger text-uppercase mr-2 px-4" @click="Wishlist.add(product.id, product.title, product.description_shorted, product.main_photo)">Add to cart</button>
                  <i class="fa fa-heart text-muted"></i>
                  <i class="fa fa-share-alt text-muted"></i>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {useWishlistStore} from "@/stores/Wishlist";
import {DefaultAPIInstance} from "../AxiosDefoultOptions/AxiosDfOpt";

export default {
  name: "SingleProduct",
  data() {
    return {
      product: {
        type: Object,
        default: () => ({
          id: Number,
          title: String,
          description_shorted: String,
          main_photo: String,
        }),
      },
      related: []
    }
  },
  methods: {},
  async mounted() {
    const response = await DefaultAPIInstance.get('products/' + this.$route.params.id + "/");
    this.product = response.data
    this.related = response.data.related
    delete this.product['related']
  },
  setup() {
    const Wishlist = useWishlistStore()
    return { Wishlist }
  },
}
</script>

<style scoped>
body {
  background-color: #000
}

.card {
  border: none
}

.product {
  background-color: #eee
}

.brand {
  font-size: 13px
}

.act-price {
  color: red;
  font-weight: 700
}

.dis-price {
  text-decoration: line-through
}

.about {
  font-size: 14px
}

.color {
  margin-bottom: 10px
}

label.radio {
  cursor: pointer
}

label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none
}

label.radio span {
  padding: 2px 9px;
  border: 2px solid #ff0000;
  display: inline-block;
  color: #ff0000;
  border-radius: 3px;
  text-transform: uppercase
}

label.radio input:checked + span {
  border-color: #ff0000;
  background-color: #ff0000;
  color: #fff
}

.btn-danger {
  background-color: #ff0000 !important;
  border-color: #ff0000 !important
}

.btn-danger:hover {
  background-color: #da0606 !important;
  border-color: #da0606 !important
}

.btn-danger:focus {
  box-shadow: none
}

.cart i {
  margin-right: 10px
}
</style>