<template>
  <div class="contact-us">
    <div class="block-banner text-center">
      <h1>CONTACT US</h1>
    </div>
    <div class="content-wrapper contact-group">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-6">
          <div class="input-form">
            <div class="input-header mb-4">
              <h4>Get in touch</h4>
              <p>
                Please enter the details of your requesst. A member of our
                support staff will respond as soon as possible.
              </p>
            </div>
            <div class="d-flex align-items-center gap-2">
              <v-text-field
                clearable
                label="YOUR NAME"
                variant="outlined"
              ></v-text-field>
              <v-text-field
                clearable
                label="EMAIL"
                variant="outlined"
              ></v-text-field>
            </div>
            <v-text-field
              clearable
              label="PHONE NUMBER"
              variant="outlined"
            ></v-text-field>
            <v-textarea
              clearable
              label="YOUR MESSAGE"
              variant="outlined"
            ></v-textarea>
            <div class="button-group">
              <button class="btn primary-btn sumbit-btn text-center">
                Sumbit Now
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-6">
          <div class="contact-form">
            <div class="contact-form-header mb-5">
              <h4>Contact Us</h4>
              <p>You can contact us or visit us at following information.</p>
            </div>
            <div class="address d-flex gap-1 mb-5">
              <h4>Address:</h4>
              <p>
                No.508 A, Lower Kyee Myin daing Road, (Home Lan Bus Stop), Kyee
                Myin Daing Township. Yangon.
              </p>
            </div>
            <div class="address d-flex gap-1 mb-5">
              <h4>Email:</h4>
              <p>info@globetradingmm.com</p>
            </div>
            <div class="address d-flex gap-1 mb-5">
              <h4>Call Us:</h4>
              <p>+959 880 441 046</p>
            </div>
            <div class="opening-time gap-1 d-flex mb-5">
              <h4>Opening time:</h4>
              <p>
                Our store has re-opened for shopping, exchanges every day 11am
                to 7pm
              </p>
            </div>

            <hr class="p-0 m-0" />
            <div class="social-link-group mt-5">
              <div class="social-header mb-5">
                <h4>Social Link</h4>
                <p>Follow us on following socail media for update news</p>
              </div>
              <div class="d-flex align-items-center gap-3">
                <a
                  href="https://www.facebook.com/globe.trading"
                  class="icon-link"
                  target="_blank"
                  ><i class="fa-brands fa-facebook-f"></i
                ></a>
                <a href="/" class="icon-link" target="_blank"
                  ><i class="fa-brands fa-youtube"></i
                ></a>

                <a
                  href="https://www.tiktok.com/@globe_trading1?is_from_webapp=1&sender_device=pc"
                  class="icon-link"
                  target="_blank"
                  ><i class="fa-brands fa-tiktok"></i
                ></a>
                <a
                  href="https://www.instagram.com/globetrading4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  class="icon-link"
                  target="_blank"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.6016885130807!2d96.12378541094385!3d16.796481019491726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eba7e5c576c1%3A0x3feadeb298c98ae3!2sXP-Pen%20Myanmar!5e0!3m2!1sen!2sth!4v1731084500184!5m2!1sen!2sth"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.block-banner {
  width: 100%;
  height: 400px;
  background-image: url("@/assets/images/contact_us.png");
  align-content: center;
  z-index: 1;
}

.block-banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.block-banner h1 {
  color: #ffffff;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.contact-group {
  margin-top: -60px;
  z-index: 999;
}

.input-form,
.contact-form {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #ffffff;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
  border-radius: 10px;
}

.input-header h4 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.input-header p {
  font-size: 14px !important;
  opacity: 0.8;
}

.sumbit-btn {
  display: inline-block;
  text-transform: uppercase;
}

.contact-form-header h4 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.contact-form-header p {
  font-size: 14px !important;
  opacity: 0.8;
}

.address {
  cursor: pointer;
}

.address h4 {
  width: 90px;
  margin-bottom: 0px !important;
  font-size: 20px;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.opening-time h4 {
  width: 90px;
  font-size: 20px;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.opening-time p {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.address p {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.social-header h4 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.social-header p {
  font-size: 14px !important;
  opacity: 0.8;
}

.icon-link {
  padding: 15px;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
  border-radius: 10px;
  background: var(--background-color);
}

.icon-link .fa-brands {
  color: var(--font-color-white);
}

.icon-link:hover {
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}

.map {
  margin-top: 50px;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.map iframe {
  width: 1400px;
  height: 500px;
  border-radius: 10px;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
}

@media (max-width: 680px) {
  .map iframe {
    width: 680px;
  }
}

@media (max-width: 420px) {
  .map iframe {
    width: 420px;
    height: 300px;
  }
}
</style>
