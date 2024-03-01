<template>
  <img src="../../assets/Banner/Laptop.jpg" alt="" class="w-100" />
  <div class="d-flex laptop-list content-wrapper">
    <div class="me-5">
      <Nav></Nav>
    </div>
    <div class="ms-5">
      <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import ProductList from "../../components/Laptop/ProductList";
import Nav from "../../components/Laptop/Nav";
export default {
  components: {
    ProductList,
    Nav,
  },
};
</script>

<style>
.content-wrapper {
  padding: 10px 10%;
}
</style>
