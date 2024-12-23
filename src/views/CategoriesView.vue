<template>
  <div class="categories-wrapper">
    <div class="desktop">
      <Categories></Categories>
    </div>
    <div class="mobile">
      <MbCategories></MbCategories>
    </div>
  </div>
</template>

<script>
import MbCategories from "../components/mobile/MbCategories";
import Categories from "../components/Categories";
export default {
  components: {
    MbCategories,
    Categories,
  },
};
</script>

<style>
.categories-wrapper {
  margin-top: 130px;
}

.mobile {
  display: none;
}

@media (max-width: 760px) {
  .categories-wrapper {
    margin-top: 90px;
  }
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }
}
</style>
