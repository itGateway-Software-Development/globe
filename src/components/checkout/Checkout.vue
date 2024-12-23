<template>
  <div class="checkout-wrapper">
    <div class="checkout-content content-wrapper">
      <div class="row mt-5">
        <div class="col-12 col-md-12 col-xl-8 left-col mb-5">
          <CheckoutContact></CheckoutContact>
        </div>
        <div class="col-12 col-md-12 col-xl-4 right-col">
          <CheckoutProduct></CheckoutProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutProduct from "./CheckoutProduct";
import CheckoutContact from "./CheckoutContact";
import { ref } from "vue";
export default {
  components: {
    CheckoutProduct,
    CheckoutContact,
  },
};
</script>

<style scoped>
.checkout-wrapper {
  background: #e9e9e96c;
  height: 100%;
  width: 100%;
  padding: 20px 0px;
}
</style>
