<template>
  <div class="checkout-wrapper">
    <div class="checkout-content content-wrapper">
      <div class="row mt-5">
        <div class="col-12 col-md-12 col-xl-8 left-col mb-5">
          <div class="left-wrapper">
            <div class="contact-info">
              <div
                class="delivery-header mb-4 d-flex justify-content-between align-items-center"
              >
                <h6>Delivery</h6>
                <router-link to="/">Login</router-link>
              </div>
              <v-autocomplete
                label="Country Region"
                v-model="Country"
                variant="outlined"
              ></v-autocomplete>
              <div class="d-flex align-items-center gap-4 flex-wrap my-4">
                <v-text-field
                  label="First Name"
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  label="Last Name"
                  variant="outlined"
                ></v-text-field>
              </div>
              <div class="my-4">
                <v-text-field label="Address" variant="outlined"></v-text-field>
              </div>
              <div class="d-flex align-items-center gap-4 flex-wrap my-4">
                <v-text-field label="City" variant="outlined"></v-text-field>
                <v-text-field
                  label="Postal Code (optional)"
                  variant="outlined"
                ></v-text-field>
              </div>
              <div class="my-4">
                <v-text-field label="phone" variant="outlined"></v-text-field>
              </div>
              <div class="d-flex align-items-center gap-2 my-4">
                <input type="checkbox" />
                <p>Save the information for next time</p>
              </div>
            </div>
            <div class="shipping-method"></div>
            <div class="payment-method">
              <div class="delivery-header">
                <h6>Payment Method</h6>
              </div>
              <div class="radio-group my-4">
                <div
                  class="form-check check1"
                  :class="{ active: cod == 'online' }"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    value="online"
                    v-model="cod"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Online Payment
                  </label>
                </div>
                <div class="payment">
                  <div
                    class="form-check check2"
                    :class="{ active: cod == 'cash' }"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      value="cash"
                      v-model="cod"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Cash on delivery
                    </label>
                  </div>
                  <div class="cod-payment p-3" v-if="cod == 'cash'">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque rerum iusto, rem delectus est blanditiis laudantium
                      officiis recusandae qui sed.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, architecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-method">
              <div class="delivery-header">
                <h6>Billing Address</h6>
              </div>
              <div class="radio-group my-4">
                <div
                  class="form-check check1"
                  :class="{ active: billing == 'same' }"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    value="same"
                    v-model="billing"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Same as shipping address
                  </label>
                </div>
                <div class="payment">
                  <div
                    class="form-check check2"
                    :class="{ active: billing == 'different' }"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      value="different"
                      v-model="billing"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Use a different billing address
                    </label>
                  </div>
                  <div class="cod-payment p-3" v-if="billing == 'different'">
                    <v-autocomplete
                      label="Country Region"
                      v-model="Country"
                      variant="outlined"
                    ></v-autocomplete>
                    <div class="d-flex align-items-center gap-4 flex-wrap my-4">
                      <v-text-field
                        label="First Name"
                        variant="outlined"
                      ></v-text-field>
                      <v-text-field
                        label="Last Name"
                        variant="outlined"
                      ></v-text-field>
                    </div>
                    <div class="my-4">
                      <v-text-field
                        label="Address"
                        variant="outlined"
                      ></v-text-field>
                    </div>
                    <div class="d-flex align-items-center gap-4 flex-wrap my-4">
                      <v-text-field
                        label="City"
                        variant="outlined"
                      ></v-text-field>
                      <v-text-field
                        label="Postal Code (optional)"
                        variant="outlined"
                      ></v-text-field>
                    </div>
                    <div class="my-4">
                      <v-text-field
                        label="phone"
                        variant="outlined"
                      ></v-text-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="button-group">
              <button class="btn order-btn">Complete Order</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-xl-4 right-col">
          <div class="right-wrapper">
            <div class="product-content">
              <div class="d-flex justify-content-between">
                <div class="d-flex gap-3">
                  <div class="product-img">
                    <img
                      src="@/assets/images/gadget/7.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="product-detail">
                    <p>Asus Rog Strix Scope RX EVA-02 Edition</p>
                    <p>Keyboard</p>
                  </div>
                </div>
                <div class="price">
                  <p>K 300,000</p>
                </div>
              </div>
            </div>
            <div class="total">
              <div
                class="d-flex sub-total align-items-center justify-content-between"
              >
                <p>Subtotal</p>
                <p>K 300,000</p>
              </div>
              <div
                class="d-flex sub-total align-items-center justify-content-between"
              >
                <p>Shipping</p>
                <p>K 3,000</p>
              </div>
              <div
                class="d-flex total align-items-center justify-content-between"
              >
                <h6>Total</h6>
                <h6><span>MMK</span> K 300,000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const Country = ref("Myanmar / Burma");

    const cod = ref("cash");
    const billing = ref("same");

    return {
      Country,
      cod,
      billing,
    };
  },
};
</script>

<style scoped>
.checkout-wrapper {
  background: #e9e9e96c;
  height: 100%;
  width: 100%;
  padding: 20px 0px;
}

.checkout-content {
  width: 100%;
  height: 100%;
  margin-top: 115px;
  z-index: 1;
}

.product-content {
  height: 100%;
}

.product-img {
  width: 80px;
  border-radius: 6px;
}

.product-img img {
  border-radius: 6px;
}

.right-wrapper,
.left-wrapper {
  background: #ffffff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.left-wrapper {
  position: relative;
}

.right-wrapper {
  position: sticky;
  top: 15%;
}
.product-content p {
  font-size: 16px !important;
}

.product-content .price p {
  white-space: nowrap;
  opacity: 0.8;
}

.total {
  margin-top: 20px;
}

.sub-total {
  margin: 10px 0px;
}

.total h6 {
  font-size: 20px;
  font-weight: bold;
}

.total span {
  color: #9e9e9e;
}

.delivery-header h6 {
  font-size: 22px;
  font-weight: bold;
}

.contact-info input {
  width: 16px;
  height: 16px;
}

.payment-method {
  margin: 30px 0px;
}

.radio-group {
  border: 0.5px solid;
  border-radius: 10px;
}

.contact-info p {
  font-size: 14px !important;
  margin: 0px !important;
  padding: 0px !important;
}

.form-check {
  padding: 15px 0px 15px 35px;
  margin: 0px;
}

.form-check-input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.form-check-label {
  margin-top: 1px;
}

.active {
  border: 1px solid;
  background: var(--background-color);
  color: #ffffff;
}

.check1 {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.cod-payment p {
  font-size: 15px !important;
}

.order-btn {
  width: 100%;
  padding: 10px 15px;
  background: var(--background-color);
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  transition: 0.3s ease;
}

.order-btn:hover {
  background: #0f8ec5;
}
</style>
