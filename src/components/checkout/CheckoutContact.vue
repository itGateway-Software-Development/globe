<template>
  <div class="left-wrapper">
    <div class="contact-info">
      <div
        class="delivery-header mb-4 d-flex justify-content-between align-items-center"
      >
        <h6>Contact</h6>
        <router-link to="/">Login</router-link>
      </div>
      <v-autocomplete
        label="Country Region"
        v-model="Country"
        variant="outlined"
      ></v-autocomplete>
      <div class="d-flex align-items-center gap-4 flex-wrap my-4">
        <v-text-field label="First Name" variant="outlined"></v-text-field>
        <v-text-field label="Last Name" variant="outlined"></v-text-field>
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
    <div class="shipping-method">
      <div class="delivery-header">
        <h6>Delivery</h6>
      </div>
      <div class="delivery-design-2">
        <div class="d-flex align-items-center gap-5">
          <div class="city w-100">
            <div class="header-2">
              <h6>Choose City</h6>
            </div>
            <v-autocomplete
              label="Autocomplete"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-autocomplete>
          </div>
          <div class="township w-100">
            <div class="header-2">
              <h6>Choose Township</h6>
            </div>
            <v-autocomplete
              label="choose township"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-autocomplete>
          </div>
        </div>
      </div>
    </div>
    <div class="payment-method">
      <div class="delivery-header">
        <h6>Payment Method</h6>
      </div>
      <div class="radio-group my-4">
        <div class="form-check check1" :class="{ active: cod == 'online' }">
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
          <div class="form-check check2" :class="{ active: cod == 'cash' }">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              rerum iusto, rem delectus est blanditiis laudantium officiis
              recusandae qui sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              architecto.
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
        <div class="form-check check1" :class="{ active: billing == 'same' }">
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
              <v-text-field label="Last Name" variant="outlined"></v-text-field>
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
          </div>
        </div>
      </div>
    </div>

    <div class="button-group">
      <button class="btn order-btn">Complete Order</button>
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
.shipping-method {
  margin: 30px 0px;
}

.delivery-design {
  margin: 20px 0px;
  border: 0.5px solid #9e9e9e;
  border-radius: 10px;
}

.delivery-items {
  padding: 20px;
  border-bottom: 0.5px solid #9e9e9e;
}

.delivery-items:nth-last-child() {
  border: none;
}

.contact-info,
.shipping-method,
.payment-method {
  background: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 20px;
  border-radius: 6px;
}

.delivery-items p {
  font-size: 16px !important;
  color: #9e9e9e;
}

.delivery-design-2 {
  margin: 30px 0px;
}

.header-2 h6 {
  font-weight: bold;
}

.checkout-content {
  width: 100%;
  height: 100%;
  margin-top: 115px;
  z-index: 1;
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
