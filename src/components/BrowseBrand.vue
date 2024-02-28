<template>
  <div class="container brands mt-5 mb-5">
    <div class="row">
      <div
        class="col-6 col-md-6 col-sm-6 brand-text"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <h1 class="mt-4 mb-4 text-start fs-3 fw-bold">
          Browse Product <br />
          by Brand
        </h1>
        <button class="btn main-btn brand-btn">View More</button>
      </div>
      <div
        class="col-6 col-md-6 col-sm-6"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div class="row brand-list">
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/dell.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/acer.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/hp.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/asus.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/aoc.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img
                src="../assets/Logo/alldocube.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/avita.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/cisco.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/jbl.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/apc.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/d-link.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 mb-3">
            <div class="brand-logo">
              <img src="../assets/Logo/mashall.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MobileBrowseBrand></MobileBrowseBrand>
</template>

<script>
import MobileBrowseBrand from "./Mobile/MobileBrowseBrand";
export default {
  components: { MobileBrowseBrand },
};
</script>

<style>
.barnds {
  padding: 30px;
}

.brand-logo img {
  width: 200px;
  border: 1px solid #111;
}

.brand-text {
  justify-content: left;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-top: 150px;
}

@media (max-width: 1200px) {
  .brand-text {
    padding-top: 200px;
  }
}
@media (max-width: 860px) {
  .brand-logo img {
    width: 200px;
  }
  .brand-text {
    padding-top: 45px;
  }
  .brand-btn {
    font-size: 14px !important;
    padding: 5px;
  }
  .brand-text h1 {
    font-size: 24px !important;
  }
}

@media (max-width: 500px) {
  .brands {
    display: none !important;
  }
}
</style>
