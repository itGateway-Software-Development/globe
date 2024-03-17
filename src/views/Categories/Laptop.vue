<template>
  <img
    src="../../assets/Banner/Laptop.jpg"
    alt=""
    class="w-100 laptop-banner"
  />
  <div class="d-flex laptop-list content-wrapper">
    <div class="me-5">
      <MobileNav></MobileNav>
      <Nav></Nav>
    </div>
    <div class="ms-5">
      <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import MobileNav from "../../components/Laptop/MobileNav";
import ProductList from "../../components/Laptop/ProductList";
import Nav from "../../components/Laptop/Nav";
export default {
  components: {
    MobileNav,
    ProductList,
    Nav,
  },
};
</script>

<style>
.content-wrapper {
  padding: 10px 10% !important;
}

@media (max-width: 500px) {
  .laptop-banner {
    margin-top: 140px;
  }
  .laptop-list {
    display: block !important;
    margin-left: -20px;
  }
  .content-wrapper {
    padding: 0 !important;
  }
}
</style>
