<template>
  <div class="contact-us">
    <div class="block-banner text-center">
      <h1>CONTACT</h1>
    </div>
    <div class="content-wrapper contact-group">
      <div class="map mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.44299137479!2d96.1263657!3d16.7964759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eba7e5c576c1%3A0x3feadeb298c98ae3!2sXP-Pen%20Myanmar!5e1!3m2!1sen!2sth!4v1730897107820!5m2!1sen!2sth"
          width="1250"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="content mb-5">
        <h4>Get in touch</h4>
        <p>
          Please enter the details of your requesst. A member of our support
          staff will respond as soon as possible.
        </p>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-xl-8">
          <div class="contact-from">
            <div class="d-flex align-items-center gap-2">
              <v-text-field label="YOUR NAME" variant="outlined"></v-text-field>
              <v-text-field label="EMAIL" variant="outlined"></v-text-field>
            </div>
            <v-text-field
              label="PHONE NUMBER"
              variant="outlined"
            ></v-text-field>
            <v-textarea label="YOUR MESSAGE" variant="outlined"></v-textarea>

            <button class="btn primary-btn contact-us-btn">Sumbit now</button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
          <div class="location">
            <div class="address mb-5">
              <p>
                <span class="bold-text">Address:</span> No. 508A, Lower Kyee
                Myin Daing Road (Home Lan Bus Stop), (Beside CB Bank), Kyee Myin
                Dine Township, Yangon., Yangon, Myanmar
              </p>
            </div>

            <div class="email-contact mb-5">
              <p><span>Email:</span> support@domain.com</p>
              <p><span>Call Us:</span> +959 880 441 046</p>
            </div>

            <div class="time mb-5">
              <p>
                <span>Opening time:</span> Our store has re-opened for shopping,
                exchanges every day 11am to 7pm
              </p>
            </div>
            <div class="d-flex align-items-center gap-2">
              <div class="icon">
                <a href="/" target="_blank"
                  ><i class="fa-brands fa-facebook-f"></i
                ></a>
              </div>
              <div class="icon">
                <a href="/" target="_blank"
                  ><i class="fa-brands fa-youtube"></i
                ></a>
              </div>
              <div class="icon">
                <a href="/" target="_blank"
                  ><i class="fa-brands fa-linkedin-in"></i
                ></a>
              </div>
              <div class="icon">
                <a href="/" target="_blank"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
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
  height: 200px;
  align-content: center;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.map {
  width: 100%;
  height: 500px;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
  border-radius: 10px;
  overflow: hidden;
}

.contact-from {
  width: 100%;
  height: 100%;
}

.location {
  width: 100%;
  height: 100%;
}

.content p {
  opacity: 0.8;
  font-size: 14px !important;
  font-family: "Gilory-Medium", sans-serif;
}

.content h4 {
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  font-family: "Gilory-Bold", sans-serif;
}

.contact-from {
  margin-bottom: 50px;
}

.contact-us-btn {
  display: inline-block !important;
  text-transform: uppercase;
  font-size: 14px !important;
  padding: 15px 20px !important;
}

.location span {
  font-weight: bold;
}

.location p {
  font-size: 14px !important;
}

.icon {
  padding: 5px 12px;
  border-radius: 10px;
  align-items: center;
  background: #23b5de;
  color: #ffffff;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
}

.icon .fa-brands {
  font-size: 14px;
}

@media (max-width: 800px) {
  .map iframe {
    width: 100%;
  }
}
</style>
