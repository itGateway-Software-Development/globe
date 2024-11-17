<template>
  <div class="cart-wrapper">
    <AddtoCart></AddtoCart>
  </div>
</template>

<script>
import AddtoCart from "../components/AddtoCart";
export default {
  components: { AddtoCart },
};
</script>

<style>
.cart-wrapper {
  margin-top: 130px;
}
</style>
