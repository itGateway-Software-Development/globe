<template>
  <div class="xp_pen-wrapper">
    <div class="desktop">
      <XPPenProducts></XPPenProducts>
    </div>
    <div class="mobile">
      <MbXPPEN></MbXPPEN>
    </div>
  </div>
</template>

<script>
import MbXPPEN from "../components/mobile/MbXPPEN";
import XPPenProducts from "../components/XPPenProducts";
export default {
  components: {
    MbXPPEN,
    XPPenProducts,
  },
};
</script>

<style>
.xp_pen-wrapper {
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
