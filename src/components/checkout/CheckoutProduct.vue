<template>
  <div class="right-wrapper">
    <div class="product-content">
      <div class="d-flex justify-content-between">
        <div class="d-flex gap-3">
          <div class="product-img">
            <img src="@/assets/images/gadget/7.jpg" class="img-fluid" alt="" />
          </div>
          <div class="product-detail">
            <p>Asus Rog Strix Scope RX EVA-02 Edition</p>
            <p>Keyboard</p>
          </div>
        </div>
        <div class="price">
          <p>300,000 <span class="unit">MMK</span></p>
        </div>
      </div>
    </div>
    <div class="total">
      <div class="d-flex sub-total align-items-center justify-content-between">
        <p>Subtotal</p>
        <p>300,000 <span class="unit">MMK</span></p>
      </div>
      <div class="d-flex sub-total align-items-center justify-content-between">
        <p>Shipping</p>
        <p>3,000 <span class="unit">MMK</span></p>
      </div>
      <div class="d-flex sub-total align-items-center justify-content-between">
        <p>Tax</p>
        <p>0 <span class="unit">MMK</span></p>
      </div>
      <hr class="px-0 py-0" />
      <div class="d-flex total align-items-center justify-content-between">
        <p>Total</p>
        <p>300,000 <span class="unit">MMK</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  border-radius: 6px;
}

.right-wrapper {
  padding: 20px;
  background: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.unit {
  font-size: 13px;
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
.sub-total p {
  color: #9e9e9e;
}

.total h6 {
  font-size: 20px;
  font-weight: bold;
}

.total span {
  color: #9e9e9e;
}
</style>
