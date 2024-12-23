<template>
  <div class="content-wrapper brand-wrapper">
    <div class="content-heading text-center" data-aos="flip-up">
      <h2>Shop by Brands</h2>
    </div>
    <div
      class="brand-logo d-flex flex-wrap align-items-center justify-content-center"
    >
      <div
        class="img"
        v-for="(image, index) in logo"
        :key="index"
        data-aos="fade-down"
      >
        <img :src="image.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const logo = ref([
      {
        img: require("@/assets/images/Logo/1.jpg"),
      },
      {
        img: require("@/assets/images/Logo/2.jpg"),
      },
      {
        img: require("@/assets/images/Logo/3.jpg"),
      },
      {
        img: require("@/assets/images/Logo/4.jpg"),
      },
      {
        img: require("@/assets/images/Logo/5.jpg"),
      },
      {
        img: require("@/assets/images/Logo/6.jpg"),
      },
      {
        img: require("@/assets/images/Logo/7.jpg"),
      },
      {
        img: require("@/assets/images/Logo/8.jpg"),
      },
      {
        img: require("@/assets/images/Logo/9.jpg"),
      },
      {
        img: require("@/assets/images/Logo/10.jpg"),
      },
      {
        img: require("@/assets/images/Logo/11.jpg"),
      },
      {
        img: require("@/assets/images/Logo/12.jpg"),
      },
      {
        img: require("@/assets/images/Logo/13.jpg"),
      },
      {
        img: require("@/assets/images/Logo/14.jpg"),
      },
      {
        img: require("@/assets/images/Logo/15.jpg"),
      },
      {
        img: require("@/assets/images/Logo/16.jpg"),
      },
      {
        img: require("@/assets/images/Logo/17.jpg"),
      },
      {
        img: require("@/assets/images/Logo/18.jpg"),
      },
      {
        img: require("@/assets/images/Logo/19.jpg"),
      },
      {
        img: require("@/assets/images/Logo/20.jpg"),
      },
      {
        img: require("@/assets/images/Logo/21.jpg"),
      },
      {
        img: require("@/assets/images/Logo/22.jpg"),
      },
      {
        img: require("@/assets/images/Logo/23.jpg"),
      },
      {
        img: require("@/assets/images/Logo/24.jpg"),
      },
      {
        img: require("@/assets/images/Logo/25.jpg"),
      },
      {
        img: require("@/assets/images/Logo/26.jpg"),
      },
      {
        img: require("@/assets/images/Logo/27.jpg"),
      },
      {
        img: require("@/assets/images/Logo/28.jpg"),
      },
      {
        img: require("@/assets/images/Logo/29.jpg"),
      },
      {
        img: require("@/assets/images/Logo/30.jpg"),
      },
      {
        img: require("@/assets/images/Logo/31.jpg"),
      },
      {
        img: require("@/assets/images/Logo/32.jpg"),
      },
      {
        img: require("@/assets/images/Logo/33.jpg"),
      },
      {
        img: require("@/assets/images/Logo/34.jpg"),
      },
      {
        img: require("@/assets/images/Logo/35.jpg"),
      },
      {
        img: require("@/assets/images/Logo/36.jpg"),
      },
    ]);

    return { logo };
  },
};
</script>

<style scoped>
.brand-wrapper {
  margin-top: 80px;
}

img {
  width: 100%;
  padding: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s ease-out;
  perspective: 100px;
}

img:hover {
  transform: translateZ(100%);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.brand-logo {
  gap: 30px;
  margin-top: 45px;
}

.brand-logo img {
  width: 150px;
  border-radius: 6px;
}

@media (max-width: 600px) {
  .brand-logo img {
    width: 100px;
  }
}
</style>
