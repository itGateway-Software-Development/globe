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
        <div class="col-12 col-md-12 col-xl-8">
          <div class="shopping-cart">
            <div
              class="shopping-cart-header d-flex align-items-center justify-content-between"
            >
              <h3>Shopping Cart</h3>
              <h6>{{ cartItemList.length }} Items</h6>
            </div>
            <hr class="px-0 py-0" />
            <div class="cart-list">
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left"><h6>Product</h6></th>
                    <th class="text-left"><h6>Quantity</h6></th>
                    <th class="text-left"><h6>Total</h6></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartItemList" :key="item.id">
                    <td class="product-group">
                      <div class="d-flex align-items-center gap-3">
                        <span class="material-symbols-outlined"> delete </span>
                        <div class="d-flex align-items-center gap-3">
                          <div class="product-img">
                            <img :src="item.img" alt="" class="img-fluid" />
                          </div>
                          <div class="product-content">
                            <h6>{{ item.name }}</h6>
                            <p>{{ item.type }}</p>
                            <h6>${{ item.price }}</h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="quantity-group">
                      <div class="d-flex align-items-center gap-3">
                        <button class="quantity-btn">
                          <span class="material-symbols-outlined">
                            remove
                          </span>
                        </button>
                        <input
                          type="number"
                          v-model="item.quantity"
                          class="quantity-input text-center"
                        />
                        <button class="quantity-btn">
                          <span class="material-symbols-outlined"> add </span>
                        </button>
                      </div>
                    </td>
                    <td class="total-group">
                      <h6>$ {{ item.price }}</h6>
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <hr class="px-0 py-0" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-xl-4">
          <div class="order-summary">
            <div class="order-header text-left">
              <h3>Order Summary</h3>
            </div>
            <hr class="px-0 py-0" />
            <div class="price-group">
              <div
                class="d-flex align-items-center justify-content-between item"
              >
                <p>Subtotal:</p>
                <h6>$600</h6>
              </div>
              <div
                class="d-flex align-items-center justify-content-between item"
              >
                <p>Delivery:</p>
                <h6>$0</h6>
              </div>
              <hr class="px-0 py-0" />
              <div
                class="d-flex align-items-center justify-content-between item"
              >
                <p>Total:</p>
                <h6>$600</h6>
              </div>
            </div>

            <div class="delivery-group">
              <div class="city">
                <h6>City</h6>
                <v-autocomplete
                  label="Choose your city"
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
              <div class="address">
                <h6>Address</h6>
                <v-text-field
                  label="Enter your address"
                  variant="outlined"
                ></v-text-field>
              </div>
              <div class="address">
                <h6>Phone Number</h6>
                <v-text-field
                  label="Enter Phone Number"
                  variant="outlined"
                ></v-text-field>
              </div>
            </div>

            <div class="payment-group">
              <h6>Payment</h6>
              <div class="from-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Cash on Delivery
                  </label>
                </div>
                <hr class="mx-0 my-0" />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Online Pay
                  </label>
                </div>
              </div>
            </div>

            <div class="button-group">
              <div class="d-flex align-items-center gap-2">
                <button @click="changeRoute()" class="btn shopping-btn">
                  Continus Shopping
                </button>
                <button class="btn checkout-btn">Order Now</button>
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
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const cartItemList = ref([
      {
        id: "1",
        name: "Asus Rog Strix Scope RX EVA-02 Edition",
        price: "300",
        color: "red",
        type: "Keyboard",
        img: require("@/assets/images/gadget/7.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Asus Rog Strix Scope RX EVA-02 Edition",
        price: "300",
        color: "red",
        type: "Keyboard",
        img: require("@/assets/images/gadget/7.jpg"),
        quantity: 1,
      },
    ]);

    const router = useRouter();

    const changeRoute = () => {
      router.push("/");
    };

    return {
      cartItemList,
      changeRoute,
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

.order-header {
  margin-bottom: 24px;
}

.shopping-cart-header h3,
.order-header h3 {
  font-weight: bold;
  font-family: "Gilory-bold", sans-serif;
}

.shopping-cart-header h6 {
  font-weight: bold;
  font-size: 18px;
  font-family: "Gilory-bold", sans-serif;
  color: #8f8f8f;
}

.product-img {
  width: 150px;
}

.product-img img {
  border-radius: 6px;
}

.quantity-input {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f3f4f6;
  cursor: pointer;
  align-items: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

thead tr th h6 {
  font-weight: bold;
  font-size: 18px;
  font-family: "Gilory-bold", sans-serif;
  color: #8f8f8f;
}

tbody tr td {
  padding: 20px 16px !important;
}

.quantity-btn {
  width: max-content;
  align-items: center;
  display: flex;
  cursor: pointer;
}

.quantity-btn .material-symbols-outlined {
  font-size: 20px;
}

.total-group h6 {
  margin-bottom: 0px !important;
  font-weight: bold;
  font-size: 18px;
  font-family: "Gilory-bold", sans-serif;
}

.product-content p {
  margin-bottom: 10px !important;
  color: #8f8f8f;
  font-weight: bold;
}

.product-content h6 {
  font-weight: bold;
  font-size: 18px;
  font-family: "Gilory-bold", sans-serif;
}

.price-group {
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  margin-bottom: 30px;
}
.item {
  margin-bottom: 10px;
}

.item p {
  font-weight: bold;
  color: #8f8f8f;
}

.item h6 {
  font-weight: bold;
  font-size: 18px;
  font-family: "Gilory-bold", sans-serif;
}

.delivery-group {
  margin-bottom: 10px;
}

.delivery-group h6 {
  font-weight: bold;
  font-size: 18px;
  font-family: "Gilory-bold", sans-serif;
  color: #8f8f8f;
}

.payment-group {
  margin-bottom: 30px;
}

.payment-group h6 {
  font-weight: bold;
  font-size: 18px;
  font-family: "Gilory-bold", sans-serif;
  color: #8f8f8f;
}

.from-group {
  border: 1px solid #8f8f8f;
  border-radius: 10px;
}

.form-check {
  margin: 10px 20px;
}

.shopping-btn {
  padding: 10px 15px;
  width: 100%;
  border: 1px solid #8f8f8f;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}

.checkout-btn {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid var(--background-color);
  background: var(--background-color);
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}

.shopping-btn:hover {
  background: var(--hover-color);
  border: none;
  color: #fff;
}

.checkout-btn:hover {
  background: #0a65af;
}

.total-group {
  padding: 20px 10px !important;
}

@media (max-width: 800px) {
  .total-group h6 {
    font-size: 16px;
  }

  .total-group {
    padding: 20px 10px !important;
  }
}

@media (max-width: 650px) {
  .product-img {
    width: 100px;
    margin-left: 10px;
  }

  .product-group {
    padding: 20px 10px !important;
  }

  .product-content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 10px;
  }

  .product-content h6 {
    font-size: 16px;
  }
  .gap-3 {
    gap: 0px !important;
  }
}

@media screen {
}
</style>
