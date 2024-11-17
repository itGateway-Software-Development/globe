<template>
  <div class="cart-wrapper">
    <div class="block-banner text-center">
      <h1>Your Shopping Cart</h1>
      <p>
        <router-link to="/" class="block-link">Home</router-link> .
        <router-link to="/cart" class="block-link"
          >Your Shopping Cart</router-link
        >
      </p>
    </div>

    <div class="content-wrapper product-group">
      <div class="row">
        <div class="col-12 col-md-8 col-xl-8">
          <div class="product-list">
            <v-table>
              <thead>
                <tr>
                  <th class="text-center"><h6>Product</h6></th>
                  <th class="text-left"><h6>Price</h6></th>
                  <th class="text-left"><h6>Quantity</h6></th>
                  <th class="text-left"><h6>Total</h6></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItemList" :key="item.id">
                  <td>
                    <div class="product-detail d-flex gap-4 align-items-center">
                      <span class="material-symbols-outlined"> delete </span>
                      <div class="d-flex gap-2 align-items-center">
                        <div class="product-img">
                          <img :src="item.img" alt="" />
                        </div>
                        <div class="product-content">
                          <h6>{{ item.name }}</h6>
                          <p>color: {{ item.color }}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$ {{ item.price }}</td>
                  <td>
                    <div class="quantity-input">
                      <button class="quantity-btn">
                        <span class="material-symbols-outlined"> remove </span>
                      </button>

                      <input
                        type="number"
                        :value="item.quantity"
                        class="text-center number"
                      />

                      <button class="quantity-btn">
                        <span class="material-symbols-outlined"> add </span>
                      </button>
                    </div>
                  </td>
                  <td>$ {{ item.price }}</td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <div class="button-group d-flex align-items-center gap-2 mt-5">
            <button class="btn checkout-btn w-100">Process To checkout</button>
            <button class="btn shopping-btn w-100">continue shopping</button>
          </div>
        </div>
        <div class="col-12 col-md-4 col-xl-4">
          <div class="checkout-list">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    <h6>There are 2 item in your cart</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      class="total d-flex align-items-center justify-content-between mb-4"
                    >
                      <h6>Total:</h6>
                      <h5>$600</h5>
                    </div>
                    <div
                      class="shipping d-flex align-items-center justify-content-between mb-4"
                    >
                      <h6>Shipping:</h6>
                      <v-select
                        style="max-width: 200px"
                        clearable
                        label="Select City"
                        :items="[
                          'California',
                          'Colorado',
                          'Florida',
                          'Georgia',
                          'Texas',
                          'Wyoming',
                        ]"
                        variant="outlined"
                      ></v-select>
                    </div>

                    <div
                      class="grand-total d-flex align-items-center justify-content-between"
                    >
                      <h6>Grand Toal :</h6>
                      <h5>$600</h5>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
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
    const cartItemList = ref([
      {
        id: "1",
        name: "Asus Rog Strix Scope RX EVA-02 Edition",
        price: "300",
        color: "red",
        img: require("@/assets/images/gadget/7.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Asus Rog Strix Scope RX EVA-02 Edition",
        price: "300",
        color: "red",
        img: require("@/assets/images/gadget/7.jpg"),
        quantity: 1,
      },
    ]);

    return {
      cartItemList,
    };
  },
};
</script>

<style scoped>
.block-banner {
  width: 100%;
  height: 200px;
  text-align: center;
  align-content: center;
}

.block-link:hover {
  color: var(--hover-color) !important;
}

.product-list {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.product-list thead {
  background: #ededed;
}

.product-list th {
  text-transform: uppercase;
}

.product-list th h6 {
  font-weight: bold;
  font-family: "Gilory-Bold", sans-serif;
}

.product-list tr td {
  padding: 20px 10px !important;
}

.product-img img {
  width: 100px;
}

.product-content h6 {
  font-weight: bold;
  font-family: "Gilory-Bold", sans-serif;
}

.product-content p {
  text-transform: uppercase;
  font-size: 14px !important;
}

.quantity-input {
  display: flex;
  align-items: center;
  width: max-content;
  height: 30px;
  border: 0.5px solid #111111;
}

.quantity-input input {
  width: 50px;
  height: 30px;
  background: #ededed;
  border: 0.5px solid #111111;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.quantity-btn {
  height: 30px;
  width: 30px;
}

.quantity-btn .material-symbols-outlined {
  font-size: 14px;
}

.checkout-list {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.checkout-list tbody {
  background: #ededed;
}

.checkout-list h6 {
  text-transform: uppercase;
  font-weight: bold;
}

.checkout-list h5 {
  font-weight: bold;
}

.checkout-list tr td {
  padding: 20px 10px !important;
}

.checkout-btn {
  border: 1px solid #111111;
  padding: 10px 15px;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  font-weight: bold;
}

.shopping-btn {
  border: 1px solid #111111;
  padding: 10px 15px;
  background: var(--background-color);
  color: #ffffff;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  font-weight: bold;
}

.checkout-btn:hover {
  background: var(--background-color);
  color: #ffffff;
}

.shopping-btn:hover {
  background: #0a65af;
}
</style>
