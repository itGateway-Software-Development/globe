<template>
  <div class="cart-wrapper">
    <div class="block-banner text-center">
      <h1>Your Shopping Cart</h1>
      <p>
        <router-link to="/" class="block-link">Home</router-link> /
        <span to="/" class="disabled">Your Shopping Cart</span>
      </p>
    </div>
    <div class="content-wrapper product-group" v-if="cartItems.length > 0">
      <div class="row">
        <div class="col-12 col-md-12 col-xl-8">
          <div class="shopping-cart">
            <div
              class="shopping-cart-header d-flex align-items-center justify-content-between"
            >
              <h3>Shopping Cart</h3>
              <h6>Items</h6>
            </div>
            <hr class="px-0 py-0" />
            <div class="cart-list">
              <v-table v-if="cartItems.length > 0">
                <thead>
                  <tr>
                    <th class="text-left"><h6>Product</h6></th>
                    <th class="text-center"><h6>Quantity</h6></th>
                    <th class="text-center"><h6>Total</h6></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartItems" :key="item.id">
                    <td class="product-group">
                      <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center gap-5">
                          <div class="product-img">
                            <img
                              :src="item.images[0].image_url"
                              alt=""
                              class="img-fluid"
                            />
                          </div>
                          <div class="product-content">
                            <h6>{{ item.productName }}</h6>
                            <p>{{ item.productCategory }}</p>
                            <h6>{{ item.price }} MMK</h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="quantity-group">
                      <div
                        class="d-flex align-items-center justify-content-center gap-3"
                      >
                        <button
                          class="quantity-btn"
                          @click="decreaseQuantity(item)"
                        >
                          <span class="material-symbols-outlined">
                            remove
                          </span>
                        </button>
                        <input
                          type="number"
                          v-model="item.quantity"
                          class="quantity-input text-center"
                        />
                        <button
                          class="quantity-btn"
                          @click="increaseQuantity(item)"
                        >
                          <span class="material-symbols-outlined"> add </span>
                        </button>
                      </div>
                    </td>
                    <td class="total-group text-center">
                      <h6>{{ item.price }} MMK</h6>
                    </td>
                    <td class="delete">
                      <button class="delete-btn" @click="removeFromCart(item)">
                        <span class="material-symbols-outlined"> delete </span>
                      </button>
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
                <p>Subtotal</p>

                <h6>{{ totalPrice }} MMK</h6>
              </div>

              <hr class="px-0 py-0" />
              <div
                class="d-flex align-items-center justify-content-between item"
              >
                <p>Total</p>

                <h6>{{ totalPrice }} MMK</h6>
              </div>
            </div>

            <div class="button-group">
              <div class="d-flex align-items-center gap-2">
                <button @click="changeRoute()" class="btn shopping-btn">
                  Continue Shopping
                </button>
                <router-link to="/cart/checkout" class="btn checkout-btn"
                  >Checkout Now</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper no-product-group text-center" v-else>
      <h4 class="mb-5">There is no item in cart.</h4>
      <router-link to="/" class="btn shop-more">Go back Shopping</router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const cartItems = computed(() => store.getters["cartItems"]);
    const totalPrice = computed(() => store.getters["totalPrice"]);
    const increaseQuantity = (item) => {
      store.dispatch("increaseQuantity", {
        quantity: item.quantity,
        product: item.productId,
      });
    };

    const decreaseQuantity = (item) => {
      store.dispatch("decreaseQuantity", {
        quantity: item.quantity,
        product: item.productId,
      });
    };

    const removeFromCart = (item) => {
      store.dispatch("removeFromCart", item);
    };

    const changeRoute = () => {
      router.push("/");
    };

    onMounted(() => {
      console.log(totalPrice);
    });

    return {
      cartItems,
      changeRoute,
      increaseQuantity,
      decreaseQuantity,
      totalPrice,
      removeFromCart,
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

.cart-wrapper h1 {
  font-weight: bold;
  font-family: "Gilory-bold", sans-serif;
}

.block-link:hover {
  color: var(--hover-color) !important;
}

.block-link {
  font-weight: bold;
  font-family: "Gilory-bold", sans-serif;
  opacity: 0.8;
}

.disabled {
  color: #8f8f8f;
  cursor: pointer;
  font-weight: bold;
  font-family: "Gilory-bold", sans-serif;
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
  width: 90px;
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
  color: #fff !important;
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

.custom-autocomplete .v-field__field {
  height: 40px !important;
}

.delete-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #f3f4f6;
}

.delete-btn .material-symbols-outlined {
  align-items: center;
  justify-content: center;
  display: flex;
}

.delete-btn:hover {
  background: red;
  color: #fff;
}

.shop-more {
  padding: 10px 15px;
  background: var(--background-color);
  color: #fff !important;
}

.shop-more:hover {
  background: #0a65af;
}

.shop-more:active {
  scale: 95%;
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
