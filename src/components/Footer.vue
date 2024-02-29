<template>
  <div class="mt-5 footer">
    <div
      class="footer-card d-flex justify-content-between content-wrapper flex-md-row"
    >
      <div class="address-card text-start col-4 col-md-4">
        <div class="address mb-4">
          <h2>Address</h2>
          <div class="location d-flex gap-2">
            <span class="material-symbols-outlined"> near_me </span>
            <p>
              No.508 A, Lower Kyee Myin daing Road,<br />
              (Home Lan Bus Stop), Kyee Myin Daing Township. <br />
              Yangon.
            </p>
          </div>
        </div>
        <div class="contact-us">
          <h2>Contact Us</h2>
          <div class="ph-number d-flex gap-2">
            <span class="material-symbols-outlined"> call </span>
            <p>+959 880 441 046</p>
          </div>
          <div class="mail d-flex gap-2">
            <span class="material-symbols-outlined"> mail </span>
            <p>info@globetradingmm.com</p>
          </div>
        </div>
      </div>
      <div class="shopnow-card text-start col-2 col-md-2">
        <h2>Shop Now</h2>
        <div class="shopnow-list">
          <ul>
            <li><p>Laptop</p></li>
            <li><p>Tech Gadget</p></li>
            <li><p>Networking</p></li>
            <li><p>Headset</p></li>
            <li><p>Speaker</p></li>
            <li><p>XP-Pen</p></li>
          </ul>
        </div>
      </div>
      <div class="ins-card text-start col-2 col-md-2">
        <h2>Information</h2>
        <div class="ins-list">
          <ul>
            <li><p>About Us</p></li>
            <li><p>Shipping Policy</p></li>
            <li><p>Refund Policy</p></li>
            <li><p>Our Store Location</p></li>
            <li><p>Contact Us</p></li>
          </ul>
        </div>
      </div>
      <div class="partner-card text-start col-4 col-md-6">
        <h2>Our Partnership</h2>
        <div class="partnership row">
          <div class="col-3 col-lg-3 col-md-4 col-sm-4 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-lg-3 col-md-4 col-sm-4 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div
            class="col-3 col-lg-3 col-md-4 col-sm-4 d-none d-lg-block partnership-card"
          >
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div
            class="col-3 col-lg-3 col-md-4 col-sm-4 d-none d-lg-block d-md-block partnership-card"
          >
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div
            class="col-3 col-lg-3 col-md-4 col-sm-4 d-none d-lg-block d-md-block partnership-card"
          >
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div
            class="col-3 col-lg-3 col-md-4 col-sm-4 d-none d-lg-block partnership-card"
          >
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div
            class="col-3 col-lg-3 col-md-4 col-sm-4 d-none d-lg-block partnership-card"
          >
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-lg-3 col-md-4 col-sm-4 partnership-card">
            <button class="footer-btn">View All</button>
          </div>
        </div>
        <h2 class="follow-us">Follow Us</h2>
        <div class="footer-icon-group d-flex gap-4">
          <div class="icon">
            <i class="bi bi-facebook" style="font-size: 30px"></i>
          </div>
          <div class="icon">
            <i class="bi bi-instagram" style="font-size: 30px"></i>
          </div>
          <div class="icon">
            <i class="bi bi-youtube" style="font-size: 30px"></i>
          </div>
          <div class="icon">
            <i class="bi bi-linkedin" style="font-size: 30px"></i>
          </div>
        </div>
      </div>
      <div class="mobile-footer mt-4 d-none">
        <h2 class="text-start">Follow Us</h2>
        <div class="mobile-footer-icon d-flex gap-4">
          <div class="icon">
            <i class="bi bi-facebook" style="font-size: 30px"></i>
          </div>
          <div class="icon">
            <i class="bi bi-instagram" style="font-size: 30px"></i>
          </div>
          <div class="icon">
            <i class="bi bi-youtube" style="font-size: 30px"></i>
          </div>
          <div class="icon">
            <i class="bi bi-linkedin" style="font-size: 30px"></i>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer-text d-flex justify-content-between align-items-center content-wrapper"
    >
      <p>
        © Copyright
        <span class="company">itGateway Technology Group Ltd</span> . All Rights
        Reserved.
      </p>
      <p>
        Designed by <span class="team">itGateway Software Developement</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin: 0 auto;
  background-color: #0f8ec5;
}
.footer-card h2 {
  text-decoration: underline;
  color: #fff;
}

.footer-text {
  background: #142142;
  font-size: 20px;
  color: #fff;
}

.footer-text p {
  margin-top: 20px;
}

.footer-text .company {
  font-weight: 700;
}

.footer-text .team {
  color: rgb(236, 99, 22);
  font-weight: 600;
}

.footer-card p {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}

.footer-card .material-symbols-outlined {
  color: #fff;
}

.ins-card ul {
  padding: 0;
}

.ins-card ul li {
  line-height: 20px;
}

.partnership {
  padding: 0 250px 0 0;
}

.partnership-card {
  margin-bottom: 10px;
}

.shopnow-list ul {
  padding: 0;
}

.shopnow-list ul li {
  line-height: 20px;
}

.partnership img {
  width: 100px;
  height: 100px;
  border: 1px solid #111;
  border-radius: 20px;
}

.icon {
  color: #0f8ec5;
  border: 2px solid #111;
  border-radius: 60%;
  padding: 5px 12px;
  background: #fff;
}

@media (max-width: 1400px) {
  .content-wrapper {
    padding: 10px 2% !important;
  }
}

@media (max-width: 1200px) {
  .footer h2 {
    font-size: 24px;
  }

  .footer p {
    font-size: 16px;
  }

  .partnership {
    padding: 0 200px 0 0;
  }

  .none {
    display: none;
  }
}
@media (max-width: 860px) {
  .footer-card {
    flex-wrap: wrap;
    padding: 0;
  }

  .footer-text {
    flex-direction: column;
  }

  .footer-text p {
    margin-bottom: 0px;
  }

  .address-card {
    width: 800px;
    display: flex;
  }
  .shopnow-card {
    width: 200px;
    margin: 0;
  }
  .location {
    width: 400px;
  }

  .partner-card {
    width: 440px;
    overflow: hidden;
  }

  .partnership {
    width: 600px;
    overflow: hidden;
  }

  .footer-icon-group {
    display: none !important;
  }
  .follow-us {
    display: none;
  }
  .mobile-footer {
    display: block !important;
  }

  .footer-card p {
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .footer-card {
    flex-direction: column;
  }
  .address-card {
    width: 400px;
    display: block;
  }
  .partnership {
    padding-right: 150px;
  }
  .shopnow-card {
    width: 400px !important;
  }
  .shopnow-list ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .ins-card ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .ins-card {
    width: 400px !important;
  }
  .footer-card p {
    font-size: 16px;
  }
}

@media (max-width: 400px) {
  .none {
    display: none;
  }
}
</style>
