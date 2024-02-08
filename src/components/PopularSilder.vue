<template>
  <div class="logo-swiper swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../assets/2.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/2.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/2.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/2.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/2.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/2.jpg" alt="" />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const swiper = ref(null);

    onMounted(() => {
      swiper.value = new Swiper(".logo-swiper", {
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
        },
        slidesPerView: 3,
      });
    });

    return { swiper };
  },
};
</script>

<style scoped>
.swiper-wrapper {
  margin-bottom: 60px;
}
.swiper-slide img {
  width: 100%;
  height: 200px;
  padding: 20px;
}
</style>
