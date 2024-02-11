<template>
  <div class="container brands mt-5 mb-5">
    <div class="row">
      <div class="col-6 col-md-6 col-sm-6 brand-text">
        <h1 class="mt-4 mb-4 text-start fs-3 fw-bold">
          Browse Product <br />
          by Brand
        </h1>
        <button class="btn main-btn brand-btn">View More</button>
      </div>
      <div class="col-6 col-md-6 col-sm-6">
        <div class="row brand-list">
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img src="../assets/Logo/dell.jpg" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img src="../assets/Logo/acer.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img src="../assets/Logo/hp.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img src="../assets/Logo/asus.jpg" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img src="../assets/Logo/aoc.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img
                src="../assets/Logo/alldocube-logo-vector.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img
                src="../assets/Logo/avita-logo-1024x216.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img src="../assets/Logo/cisco.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img src="../assets/Logo/jbl.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img
                src="../assets/Logo/APC-Emblem.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
            <div class="brand-logo">
              <img
                src="../assets/Logo/D-Link-symbol.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-3 col-md-3 col-sm-3 brand-photo">
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
.brand-photo {
  border: 1px solid #111;
  margin: 5px;
  width: 150px;
  height: 150px;
}

.brand-logo {
  justify-content: center;
  align-content: center;
  align-items: center;
}

.brand-photo img {
  width: 120px;
  object-fit: fill;
  margin: 20px auto;
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
  .brand-photo {
    width: 80px;
    height: 80px;
  }
  .brand-text {
    padding-top: 45px;
  }
  .brand-btn {
    width: 100px !important;
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
