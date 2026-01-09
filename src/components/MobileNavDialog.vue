<template>
  <v-dialog v-model="dialog" fullscreen overlay-color="grey" overlay-opacity="0.7">
    <div class="mobile-nav menu-open">
      <div class="container max-md">
        <div class="row">
          <div class="col-sm-6">
            <div class="root-menu">
              <div class="hidden-md-down">
                <h5 class="name-deco">EXPLORE</h5>
              </div>
              <div class="scrollactive-nav scrollnav">
                <ul class="menu">
                  <li style="animation-duration: 0.25s" class="current">
                    <a class="btn-flat waves-effect" @click="handleNav('about')">about</a>
                  </li>
                  <li style="animation-duration: 0.5s">
                    <a class="btn-flat waves-effect" @click="handleNav('education')">education</a>
                  </li>
                  <li style="animation-duration: 0.75s">
                    <a class="btn-flat waves-effect" @click="handleNav('experience')">experience</a>
                  </li>
                  <li style="animation-duration: 1s">
                    <a class="btn-flat waves-effect" @click="handleNav('portfolio')">portfolio</a>
                  </li>
                  <li style="animation-duration: 1.25s">
                    <a class="btn-flat waves-effect" @click="handleNav('skills')">skills</a>
                  </li>
                  <li style="animation-duration: 1.5s">
                    <a class="btn-flat waves-effect" @click="handleNav('contact')">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="detail">
              <div class="logo-name">
                <h3 class="use-text-title">{{ $t('app.hero.title') }}</h3>
                <h4 class="use-text-subtitle">Full Stack Developer</h4>
                  <a class="btn-outlined primary waves-effect download" href="#" @click="dialog = false">Download CV</a>
              </div>
              <div class="socmed">
                <a class="btn-icon margin waves-effect" href="#"><i class="ion-logo-facebook fb"></i></a>
                <a class="btn-icon margin waves-effect" href="#"><i class="ion-logo-linkedin in"></i></a>
                <a class="btn-icon margin waves-effect" href="#"><i class="ion-logo-twitter tw"></i></a>
                <a class="btn-icon margin waves-effect" href="#"><i class="ion-logo-instagram ig"></i></a>
              </div>
              <div class="contact">
                <p class="use-text-paragraph">My personal contact<br>+216 25 311 717 <br>mariam.hitech@gmail.com</p>
                <div class="divider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-btn icon="mdi-close" @click="dialog = false" class="close-btn-mobile"></v-btn>
    </div>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue', 'navigate'])

const dialog = ref(props.modelValue)

watch(dialog, (newVal) => {
  emit('update:modelValue', newVal)
})

watch(() => props.modelValue, (newVal) => {
  dialog.value = newVal
})

const handleNav = (sectionId) => {
  emit('navigate', sectionId)
}
</script>

<style scoped>
/* === DIALOG STYLES === */
.mobile-nav {
  position: relative;
  width: 100%;
  height: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(66, 66, 66, .8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.max-md {
  max-width: 768px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col-sm-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
}

@media (max-width: 768px) {
  .col-sm-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.root-menu, .detail {
  padding: 20px;
}

.hidden-md-down {
  display: block;
}

@media (min-width: 769px) {
  .hidden-md-down {
    display: none;
  }
}

.name-deco {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--v-primary-base);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.scrollactive-nav {
  overflow-y: auto;
  max-height: 60vh;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-bottom: 10px;
  animation-fill-mode: both;
}

.menu li a {
  display: block;
  padding: 10px 0;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
  text-transform: uppercase;
}

.menu li a:hover {
  color: var(--v-primary-base);
}

.current a {
  color: var(--v-primary-base);
  font-weight: bold;
}

.logo-name {
  text-align: center;
  margin-bottom: 30px;
}

.use-text-title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--v-primary-base);
  margin-bottom: 10px;
}

.use-text-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.btn-outlined {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid var(--v-primary-base);
  color: var(--v-primary-base);
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s;
}

.btn-outlined:hover {
  background-color: var(--v-primary-base);
  color: white;
}

.socmed {
  text-align: center;
  margin-bottom: 30px;
}

.btn-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #333;
  margin: 0 5px;
  transition: all 0.3s;
}

.btn-icon:hover {
  background-color: var(--v-primary-base);
  color: white;
}

.contact {
  text-align: center;
}

.use-text-paragraph {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.divider {
  height: 1px;
  background-color: #ddd;
  margin: 15px 0;
}

.close-btn-mobile {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 10;
}
</style>