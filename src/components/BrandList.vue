<template>
  <div class="content-wrapper brand-wrapper">
    <div class="content-heading text-center" data-aos="flip-up">
      <h2>Shop by Brands</h2>
    </div>
    <div
      class="brand-logo d-flex flex-wrap align-items-center justify-content-center"
    >
      <div class="img" v-for="i in 36" :key="i" data-aos="flip-up">
        <img :src="require(`@/assets/images/Logo/${i}.jpg`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.brand-wrapper {
  margin-top: 90px;
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
