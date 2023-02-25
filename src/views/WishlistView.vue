<template>
  <button type="button" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#Wishlistmodal"
          @click="Wishlist.hideMessage()">Wishlist
  </button>
  <div class="modal fade" id="Wishlistmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Wishlist</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <br>
        <p v-if="Wishlist.showMessage === true">{{ Wishlist.wishlistMessage }}</p>
        <div class="modal-body">
          <div v-for="prod in Wishlist.get()" :key="prod">
            <wishlist-card :product="prod"></wishlist-card>
          </div>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Продовжити купівлю</button>
          <button v-if="Wishlist.get().length !== 0" @click="Wishlist.order()" class="btn btn-primary mx-1">Зробити
            замовлення
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useWishlistStore} from "@/stores/Wishlist";
import WishlistCard from "@/components/WishlistCard.vue";

export default {
  name: "WishlistView",
  components: {WishlistCard},
  setup() {
    const Wishlist = useWishlistStore();
    return {Wishlist};
  },
}
</script>
<style scoped></style>