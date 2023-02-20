<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="container-fluid text-center p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a class="navbar-brand" href="#">Studia Kuhon</a>
      <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink class="nav-item nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-item nav-link" to="/products">products</RouterLink>
          <RouterLink class="nav-item nav-link" to="/about">About us</RouterLink>
          <RouterLink class="nav-item nav-link" to="/faq">F.A.Q</RouterLink>
        </div>
      </div>
<!--      <wishlist></wishlist>-->
<!--      <login-popup></login-popup>-->
    </nav>
   <RouterView />
  </div>

<!--  <div class="bg-dark collapse" id="navbarHeader" style="">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div> &lt;!&ndash;class="col-sm-8 col-md-7 py-4"&ndash;&gt;-->
<!--          <h4 class="text-white">Про нас</h4>-->
<!--          <p class="text-muted">-->
<!--            Компанія studk-->
<!--          </p>-->
<!--        </div>-->
<!--        <div >&lt;!&ndash;class="col-sm-4 offset-md-1 py-4"&ndash;&gt;-->
<!--          <h4 class="text-white">Contact</h4>-->
<!--          <ul class="list-unsettled">-->
<!--            <li><a href="#" class="text-white">Follow on Twitter</a></li>-->
<!--            <li><a href="#" class="text-white">Like on Facebook</a></li>-->
<!--            <li><a href="#" class="text-white">Email me</a></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="navbar navbar-dark bg-dark shadow-sm">-->
<!--    <div class="container">-->
<!--      <a href="#" class="navbar-brand d-flex align-items-center">-->
<!--&lt;!&ndash;        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"&ndash;&gt;-->
<!--&lt;!&ndash;             stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2"&ndash;&gt;-->
<!--&lt;!&ndash;             viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2&ndash;&gt;-->
<!--&lt;!&ndash;             0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>&ndash;&gt;-->
<!--        <strong>Album</strong>-->
<!--      </a>-->
<!--      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"-->
<!--              aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->

</template>

<style scoped>
</style>


