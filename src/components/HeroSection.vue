<template>
  <section class="hero-cover" :style="heroSectionStyle">
    <div class="hero-cover-background">
      <div id="el" ref="vantaRef"></div>
    </div>

    <div class="hero-shell">
      <div class="hero-content">
        <p class="hero-eyebrow">Full-stack web and mobile developer</p>
<!--         <h3 class="hero-title">
          I build polished digital products with clean code and sharp interfaces.
        </h3> -->
        <p class="hero-description">
          Hi, I'm Mariam Soudeni. I create responsive web apps, mobile experiences, APIs, and automation workflows for teams that need products to feel fast, usable, and reliable.
        </p>

        <div class="hero-meta" aria-label="Profile highlights">
          <span><v-icon size="18">mdi-map-marker</v-icon> Tunis, Tunisia</span>
          <span><v-icon size="18">mdi-briefcase-check</v-icon> Freelance and full-time opportunities</span>
        </div>

        <div class="hero-actions">
          <v-btn color="primary" rounded="xl" size="large" class="px-6" @click="$emit('navigate', 'portfolio')">
            <v-icon start>mdi-view-grid-plus</v-icon>
            View Work
          </v-btn>
          <v-btn variant="outlined" color="white" rounded="xl" size="large" class="px-6" @click="downloadCV">
            <v-icon start>mdi-download</v-icon>
            Download CV
          </v-btn>
          <v-btn variant="text" color="white" rounded="xl" size="large" class="px-6" @click="$emit('navigate', 'contact')">
            Contact Me
          </v-btn>
        </div>
      </div>

      <aside class="hero-portrait" aria-label="Mariam profile">
        <div class="portrait-orbit"></div>
        <img src="@/assets/images/mari.png" alt="Mariam Soudeni" />
        <div class="portrait-badge">
          <strong>5+</strong>
          <span>years building apps</span>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from "three"

defineProps({
  heroSectionStyle: Object
})

defineEmits(['navigate'])

const vantaRef = ref(null)
let vantaEffect = null

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/Mariam-Soudani-Resume-EN.pdf'
  link.download = 'Mariam-Soudani-Resume-EN.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

onMounted(async () => {
  window.THREE = THREE
  const { default: HALO } = await import("vanta/dist/vanta.halo.min")
  vantaEffect = HALO({
    el: "#el",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    amplitudeFactor: 1.8,
    xOffset: 0.08,
    yOffset: 0.03,
    size: 2.3,
    backgroundColor: 0x070a12,
    baseColor: 0x14b8a6,
    THREE: window.THREE
  })
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>

<style scoped>
.hero-cover {
  position: relative;
  flex: 1;
  min-height: 560px;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.42);
}

.hero-cover::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 10, 18, 0.88), rgba(7, 10, 18, 0.42) 54%, rgba(7, 10, 18, 0.86)),
    linear-gradient(180deg, transparent 0%, rgba(7, 10, 18, 0.72) 100%);
  pointer-events: none;
}

.hero-cover-background,
#el {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-shell {
  position: relative;
  z-index: 1;
  min-height: inherit;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(240px, 0.5fr);
  align-items: center;
  gap: 28px;
  padding: clamp(24px, 4vw, 52px);
}

.hero-content {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-eyebrow {
  color: #5eead4;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-title {
  max-width: 980px;
  margin: 0;
  color: #f8fafc;
  font-size: clamp(2.8rem, 7vw, 6.8rem);
  font-weight: 900;
  line-height: 0.92;
}

.hero-description {
  max-width: 620px;
  margin: 0;
  color: rgba(226, 232, 240, 0.82);
  font-size: clamp(0.96rem, 1.4vw, 1.08rem);
  line-height: 1.62;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-meta span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 7px 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.62);
  color: rgba(248, 250, 252, 0.9);
  backdrop-filter: blur(16px);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
}

.hero-portrait {
  position: relative;
  justify-self: center;
  width: min(100%, 300px);
  aspect-ratio: 0.78;
  display: grid;
  place-items: center;
}

.portrait-orbit {
  position: absolute;
  inset: 2%;
  border: 1px solid rgba(20, 184, 166, 0.35);
  border-radius: 38px;
  transform: rotate(-7deg);
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.18), rgba(249, 115, 22, 0.16));
}

.hero-portrait img {
  position: relative;
  z-index: 1;
  width: 86%;
  height: 92%;
  object-fit: cover;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.45);
}

.portrait-badge {
  position: absolute;
  z-index: 2;
  right: -8px;
  bottom: 28px;
  width: 124px;
  padding: 13px;
  border-radius: 18px;
  background: rgba(248, 250, 252, 0.94);
  color: #071018;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.32);
}

.portrait-badge strong {
  display: block;
  color: #0f766e;
  font-size: 1.7rem;
  line-height: 1;
}

.portrait-badge span {
  font-size: 0.76rem;
  font-weight: 700;
}

@media (max-width: 1180px) {
  .hero-shell {
    grid-template-columns: 1fr;
    min-height: 640px;
  }

  .hero-portrait {
    width: min(70vw, 280px);
  }
}

@media (max-width: 700px) {
  .hero-cover {
    border-radius: 20px;
  }

  .hero-shell {
    min-height: auto;
    padding: 24px 16px 30px;
  }

  .hero-title {
    font-size: clamp(2.45rem, 16vw, 4rem);
  }

  .hero-actions .v-btn {
    width: 100%;
  }

  .hero-portrait {
    width: min(76vw, 240px);
  }

  .portrait-badge {
    right: -4px;
    bottom: 22px;
  }
}
</style>
