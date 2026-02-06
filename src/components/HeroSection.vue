<template>
  <section class="hero-cover" :style="heroSectionStyle">
    <div class="hero-cover-background">
      <div id="el" ref='vantaRef'></div>
    </div>
    <div class="hero-content">
      <p class="hero-eyebrow">Creative Developer</p>
      <h1 class="hero-title">Hi, I'm Mariam Soudeni</h1>
      <p class="hero-description">
        I'm a passionate web and mobile developer with five years of experience working across both front-end and back-end development. I specialize in creating responsive, modern, and user-friendly interfaces while also building scalable and efficient application logic. I love bringing ideas to life, solving problems with clean code, and continuously learning new technologies. My goal is to deliver high-quality digital products that are intuitive, reliable, and impactful for users.
      </p>
      <div class="hero-meta">
        <span>📍 Based in Tunisie</span>
        <span>💼 Available for freelance projects / Full Time</span>
      </div>
      <div class="hero-actions">
        <v-btn color="primary" rounded="xl" class="px-6" @click="$emit('navigate', 'portfolio')">
          View Portfolio
        </v-btn>
        <v-btn variant="outlined" color="primary" rounded="xl" class="px-6" @click="$emit('navigate', 'contact')">
          Contact Me
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from "three"

const props = defineProps({
  heroSectionStyle: Object
})

const emit = defineEmits(['navigate'])

const vantaRef = ref(null)

onMounted(async () => {
  window.THREE = THREE
  const { default: HALO } = await import("vanta/dist/vanta.halo.min")
  HALO({
    el: "#el",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    amplitudeFactor: 3.00,
    xOffset: 0.02,
    yOffset: 0.03,
    size: 3.00,
    THREE: window.THREE
  })
})
</script>

<style scoped>
/* === HERO SECTION STYLES === */
.hero-cover {
  position: relative;
  flex: 1;
  border-radius: 32px;
  box-shadow: 0 24px 48px rgba(26, 3, 56, 0.4);
  overflow: hidden;
  height: 70vh;
  min-height: 500px;
}

/* Background container for Vanta Halo */
.hero-cover-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
}

/* Ensure the Vanta element fills the container */
#el {
  width: 100%;
  height: 100%;
  align-content: center;
}

/* === HERO CONTENT === */
.hero-content {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 65%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  border-radius: 30px;
  background-color: #ee82ee59;
  z-index: 1;
}

.hero-eyebrow {
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}

.hero-title {
  font-weight: 600;
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.hero-description {
  line-height: 1.6;
  margin: 0;
  color: rgba(247, 242, 255, 0.85);
  font-size: clamp(0.875rem, 2vw, 1.125rem);
}

.hero-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
  font-size: clamp(0.75rem, 1.5vw, 1rem);
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 8px;
  flex-wrap: wrap;
}

/* === RESPONSIVE === */
/* Tablet and smaller desktop */
@media (max-width: 1180px) {
  .hero-cover {
    height: auto;
    min-height: 60vh;
    width: 100%;
  }

  .hero-content {
    left: 50%;
    transform: translateX(-50%);
    top: 1%;
    width: 85%;
    height: auto;
    min-height: 400px;
  }
}

/* Large mobile / Small tablet */
@media (max-width: 960px) {
  .hero-cover {
    border-radius: 24px;
  }

  .hero-content {
    left: 50%;
    transform: translateX(-50%);
    top: 1%;
    width: 85%;
    height: auto;
    min-height: 400px;
    padding: 32px 24px;
  }
}

/* Custom breakpoint for width around 887px */
@media (max-width: 887px) {
  .hero-content {
    width: 95%;
    padding: 24px 20px;
  }
}

/* Mobile devices */
@media (max-width: 700px) {
  .hero-cover {
    height: auto;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  .hero-content {
    width: 95%;
    left: 50%;
    transform: translateX(-50%);
    top: 1%;
    padding: 24px 16px;
    gap: 12px;
    border-radius: 20px;
  }

  .hero-eyebrow {
    font-size: 0.75rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions .v-btn {
    width: 100%;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .hero-cover {
    border-radius: 16px;
  }

  .hero-content {
    width: 98%;
    padding: 20px 12px;
    border-radius: 16px;
    gap: 10px;
  }
}

/* Very small screens */
@media (max-width: 360px) {
  .hero-cover {
  }

  .hero-content {
    padding: 16px 10px;
  }
}
</style>