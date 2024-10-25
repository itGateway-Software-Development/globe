<template>
  <div class="loading-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading-container {
  background: #ededed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.loader {
  position: relative;
  width: 64px;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.5);
  transform: rotate(45deg);
  overflow: hidden;
}
.loader:after {
  content: "";
  position: absolute;
  inset: 10px;
  margin: auto;
  background-image: url("@/assets/images/logo_1.jpg");
  background-size: 100%;
}
.loader:before {
  content: "";
  position: absolute;
  inset: -15px;
  margin: auto;
  background: #23b5de;
  animation: diamondLoader 2s linear infinite;
}
@keyframes diamondLoader {
  0%,
  10% {
    transform: translate(-64px, -64px) rotate(-45deg);
  }
  90%,
  100% {
    transform: translate(0px, 0px) rotate(-45deg);
  }
}
</style>
