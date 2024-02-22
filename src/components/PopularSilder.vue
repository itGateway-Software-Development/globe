<template>
  <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
    <h2 class="fs-3 text-center mt-4 mb-4 fw-bold">Popular Gadget</h2>
    <div class="gadget">
      <div class="gadget-slider">
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.jpg" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
      </div>
      <div class="gadget-slider">
        <div class="gadget-card">
          <img src="../assets/2.jpg" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
        <div class="gadget-card">
          <img src="../assets/2.png" alt="" />
          <p class="text-center">Product 1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.gadget {
  overflow: hidden;
  display: flex;
}

.gadget-slider {
  display: flex;
  animation: 20s slide infinite linear;
}

.gadget-card {
  padding: 12px;
}

.gadget-card img {
  height: 150px;
}

.gadget-card p {
  font-size: 20px;
  font-weight: 500;
  padding-top: 5px;
}

.gadget:hover .gadget-slider {
  animation-play-state: paused;
}

@media (max-width: 860px) {
  .gadget-card img {
    width: 150px;
    height: 100px;
  }
}

@media (max-width: 500px) {
  .gadget-card img {
    width: 150px;
    height: 100px;
  }
}
</style>
