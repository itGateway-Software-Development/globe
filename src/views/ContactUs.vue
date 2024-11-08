<template>
  <div class="contact-wrapper">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from "../components/Contact";
export default {
  components: { Contact },
};
</script>

<style>
.contact-wrapper {
  margin-top: 140px;
}

@media (max-width: 760px) {
  .contact-wrapper {
    margin-top: 50px;
  }
}
</style>
