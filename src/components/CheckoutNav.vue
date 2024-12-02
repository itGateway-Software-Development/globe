<template>
  <div class="checkout-nav">
    <div
      class="content-wrapper d-flex align-items-center justify-content-between"
    >
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/images/logo.png" class="img-fluid" alt=""
        /></router-link>
      </div>
      <div class="route-link">
        <router-link to="/cart" class="d-flex align-items-center gap-2">
          <span class="material-symbols-outlined"> arrow_back_ios </span>
          <p>Back to Cart</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.checkout-nav {
  width: 100%;
  height: max-content;
  top: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin-bottom: 10px;
  position: fixed;
  background: #ffffff;
  z-index: 999;
}

.logo {
  width: 90px;
}

.route-link:hover {
  color: var(--hover-color);
}
</style>
