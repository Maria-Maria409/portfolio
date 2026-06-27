<template>
  <div class="line"></div>
</template>

<script setup>
// No script
</script>

<style scoped>
/* === LINE ELEMENT === */
.line {
  border-right: 5px solid;
  border-top: 0;
  border-left: 0;
  border-image-source: linear-gradient(62deg, #6366f1 0%, #ec4899 100%);
  border-image-slice: 1;
  position: relative;
  height: 40px;
  margin-top: 30px;
  left: 24%;
  right: 1.2%;
  width: 60%;
}

/* === RESPONSIVE === */
@media (max-width: 1180px) {
  .line {
    display: none;
  }
}

@media (max-width: 960px) {
  .line {
    left: 5%;
    right: 5%;
    width: 90%;
    height: 30px;
    margin-top: 20px;
  }
}

@media (max-width: 887px) {
  .line {
    display: none;
  }
}

@media (max-width: 700px) {
  .line {
    display: none;
  }
}

@media (max-width: 480px) {
  .line {
    height: 20px;
    border-right-width: 2px;
    border-bottom-width: 2px;
  }
}
</style>