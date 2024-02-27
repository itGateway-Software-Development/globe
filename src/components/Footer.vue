<template>
  <div class="mt-5 footer">
    <div class="footer-card">
      <div class="address-card text-start">
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
      <div class="shopnow-card text-start">
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
      <div class="partner-card text-start">
        <h2>Our Partnership</h2>
        <div class="partnership row">
          <div class="col-3 col-md-3 col-sm-3 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-md-3 col-sm-3 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-md-3 col-sm-3 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-md-3 col-sm-3 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-md-3 col-sm-3 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-md-3 col-sm-3 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-md-3 col-sm-3 partnership-card">
            <img src="../assets/Logo/asus.png" alt="" />
          </div>
          <div class="col-3 col-md-3 col-sm-3 partnership-card">
            <button>View All</button>
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
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin: 0 auto;
  background-color: #0f8ec5;
  padding: 12px;
}

.footer-card {
  margin: 0 350px;
  display: flex;
}

.footer-card h2 {
  text-decoration: underline;
  color: #fff;
}

.footer-card p {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}

.footer-card .material-symbols-outlined {
  color: #fff;
}

.partnership {
  padding: 0 150px 0 0;
}

.partnership-card {
  margin-bottom: 10px;
}

.partnership .footer-card .shopnow-card {
  width: 500px;
}

.shopnow-card {
  margin-left: 50px;
  margin-right: 70px;
}

.shopnow-list ul {
  padding: 0;
}

.shopnow-list ul li {
  line-height: 20px;
}

.partner-card {
  width: 400px;
}

.partnership-card button {
  width: 100px;
  height: 100px;
  border: 1px solid #111;
  border-radius: 20px;
  font-weight: 600;
}

.partnership-card button:hover {
  background: #0f8ec5;
  color: #fff;
}

.partnership img {
  width: 100px;
  height: 100px;
  border: 1px solid #111;
  border-radius: 20px;
}

.partnership {
  width: 600px;
}

.icon {
  color: #0f8ec5;
  border: 2px solid #111;
  border-radius: 60%;
  padding: 5px 12px;
  background: #fff;
}

@media (max-width: 1200px) {
  .footer-card {
    margin: 0 auto;
  }

  .address-card {
    width: 700px;
  }

  .address {
    width: 400px;
  }
  .shopnow-card {
    width: 300px !important;
    margin-left: 50px;
  }

  .partner-card {
    width: 700px;
    overflow: hidden;
  }

  .partnership {
    width: 600px;
    overflow: hidden;
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
  .shopnow-card {
    width: 400px !important;
  }
  .shopnow-list ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .footer-card p {
    font-size: 16px;
  }
}

@media (max-width: 400px) {
  .partnership-card img {
    width: 90px;
  }

  .partnership-card {
    width: 90px;
  }
}
</style>
