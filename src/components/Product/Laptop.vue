<template>
  <div class="feature">
    <div class="section-header mt-5">
      <h2 class="fs-3 text-center fw-bold">Laptop</h2>
    </div>
    <ul class="nav-tabs">
      <li class="tabs active">
        <p class="tabs-link show" data-bs-toggle="tab" data-bs-target="#tab-1">
          Home & Business
        </p>
      </li>
      <!-- End tab nav item -->

      <li class="tabs">
        <p class="tabs-link" data-bs-toggle="tab" data-bs-target="#tab-2">
          2 in 1 Laptop
        </p>
        <!-- End tab nav item -->
      </li>

      <li class="tabs">
        <p class="tabs-link" data-bs-toggle="tab" data-bs-target="#tab-3">
          Productivity
        </p>
      </li>
      <!-- End tab nav item -->

      <li class="tabs">
        <p class="tabs-link" data-bs-toggle="tab" data-bs-target="#tab-4">
          Gaming
        </p>
      </li>
      <!-- End tab nav item -->
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-tabs {
  display: flex;
  margin: 30px 440px;
  border: 0px;
  align-items: center;
}
.feature .tabs {
  width: 200px;
  height: 40px;
  margin: 0 20px;
  border: 1px solid #111;
  border-radius: 10px;
  padding: 4px;
}

.feature .tabs-link {
  font-size: 20px;
  text-decoration: none;
}

.feature .tabs:hover {
  background-color: #0f8ec5;
}

.feature .tabs-link:hover {
  color: #fff;
}

.feature .tabs.active {
  background-color: #0f8ec5;
  color: #fff;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 0;
  color: #000;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}
.section-header h2:after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 5px;
  background: #0f8ec5;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
