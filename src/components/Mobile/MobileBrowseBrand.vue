<template>
  <div class="mobile-brands mt-3">
    <div class="mobile-brand-text">
      <h3 class="fs-5 text-center mb-3 fw-bold">Browse by Brands</h3>
    </div>
    <div class="row mobile-row">
      <div class="col-4 mobile-logo">
        <div class="mobile-brand-photo">
          <img src="../../assets/Logo/dell.jpg" class="img-fluid" alt="" />
        </div>
      </div>
      <div class="col-4 mobile-logo">
        <div class="mobile-brand-photo">
          <img src="../../assets/Logo/acer.png" class="img-fluid" alt="" />
        </div>
      </div>
      <div class="col-4 mobile-logo">
        <div class="mobile-brand-photo">
          <img src="../../assets/Logo/jbl.png" class="img-fluid" alt="" />
        </div>
      </div>
      <div class="col-4 mobile-logo">
        <div class="mobile-brand-photo">
          <img src="../../assets/Logo/asus.jpg" class="img-fluid" alt="" />
        </div>
      </div>
      <div class="col-4 mobile-logo">
        <div class="mobile-brand-photo">
          <img src="../../assets/Logo/mashall.png" class="img-fluid" alt="" />
        </div>
      </div>
      <div class="col-4 mobile-logo">
        <div class="mobile-brand-photo">
          <img
            src="../../assets/Logo/Brother_logo.svg.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mobile-brands {
  display: none;
}

@media (max-width: 500px) {
  .mobile-brands {
    display: block;
  }

  .mobile-row {
    justify-content: center;
    padding: 20px;
    margin: 0 auto;
  }

  .mobile-logo {
    width: 120px;
    padding: 20px;
    border: 1px solid;
    margin: 2px;
  }

  .mobile-row .mobile-logo img {
    width: 90px;
  }
}
</style>
