<template>
  <div class="box">
    <div class="card photo">
      <figure>
        <img class="image-class" src="@/assets/images/mari.png" alt="avatar">
      </figure>
      <span class="frame"></span>
    </div>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
/* === PHOTO CARD === */
.card {
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 20px;
  right: 15%;
  justify-self: self-end;
}

.photo {
  position: relative;
  margin-top: -250px;
  width: 200px;
  height: 280px;
  overflow: visible;
}

.frame {
  left: 5%;
  z-index: 999;
  border-color: aquamarine !important;
  position: absolute;
  width: 90%;
  top: 16px;
  height: 105%;
  border: 2px solid transparent;
  background: -o-linear-gradient(330deg, var(--v-secondary-base), var(--v-primary-base)) border-box;
  background: linear-gradient(120deg, var(--v-secondary-base), var(--v-primary-base)) border-box;
  -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff)) padding-box, -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff));
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  mask: exclude;
  z-index: 5;
  border-radius: 20px;
}

.image-class {
  border-radius: 20px;
  position: relative;
  width: -webkit-fill-available;
  height: 80%;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .card {
    margin-right: auto;
  }
}

@media (max-width: 1180px) {
  .photo {
    right: auto;
    position: relative;
    margin-top: 20px;
    width: 180px;
    height: 250px;
  }

  .box {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 960px) {
  .photo {
    right: auto;
    position: relative;
    margin-top: 20px;
    width: 180px;
    height: 250px;
  }

  .box {
    display: flex;
    justify-content: center;
    justify-self: center;
  }
}

@media (max-width: 887px) {
  .photo {
    position: relative;
    margin-top: 20px;
    width: 160px;
    height: 220px;
    right: auto;
  }
}

@media (max-width: 700px) {
  .photo {
    position: relative;
    margin-top: 20px;
    width: 140px;
    height: 190px;
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }
}

@media (max-width: 480px) {
  .photo {
    width: 120px;
    height: 165px;
  }
}

@media (max-width: 360px) {
  .photo {
    width: 100px;
    height: 140px;
  }
}
</style>