<template>
  <v-app>
  <v-app-bar
      class="top-bar"
      elevation="0"
      height="64"
    >
      <v-app-bar-nav-icon class="mobile-trigger" @click="dialog = true" />
      <v-toolbar-title class="font-weight-bold brand-title">Mariam Soudeni</v-toolbar-title>
      <v-spacer />
      <v-btn variant="text" class="desktop-link" @click="handleNavigation('portfolio')">Work</v-btn>
      <v-btn variant="text" class="desktop-link" @click="handleNavigation('skills')">Skills</v-btn>
      <v-btn color="primary" rounded="xl" class="desktop-link px-5" @click="handleNavigation('contact')">
        Contact
      </v-btn>
    </v-app-bar>

    <MobileNavDialog v-model="dialog" @navigate="handleNavigation" />

    <v-main>
      <div class="app-layout">
        <SidebarMenu ref="sidebarMenu" class="sidebar-menu" @navigate="handleNavigation" />

        <HeroSection :hero-section-style="heroSectionStyle" @navigate="handleNavigation" />
      </div>
      <v-container fluid class="pa-0">
        <Home />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useDisplay } from 'vuetify'
import SidebarMenu from './components/SidebarMenu.vue'
import Home from './views/Home.vue'
import MobileNavDialog from './components/MobileNavDialog.vue'
import HeroSection from './components/HeroSection.vue'

const display = useDisplay()
const drawer = ref(!display.mobile.value)
const dialog = ref(false)
const sidebarMenu = ref(null)
const menuHeight = ref(0)


// animation: 6s ease-in-out infinite float;

const updateMenuHeight = () => {
  nextTick(() => {
    const element = sidebarMenu.value?.element?.value
    if (element) {
      menuHeight.value = element.offsetHeight
    }
  })
}

const heroSectionStyle = computed(() => {
  if (!menuHeight.value) return {}
  return {
    height: `${menuHeight.value}px`,
  }
})



onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMenuHeight)
})

watch(() => display.mobile.value, (isMobile) => {
  drawer.value = !isMobile
  updateMenuHeight()
})

const handleNavigation = (sectionId) => {
  dialog.value = false
  setTimeout(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}
</script>

<script>
import * as THREE from "three";
// import HALO from "vanta/dist/vanta.halo.min";

export default {
  // No mounted needed
}
</script>
<style scoped>
/* === PAGE LAYOUT === */
.app-layout {
  display: flex;
  gap: 24px;
  padding: 28px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
}

.top-bar {
  background: rgba(7, 10, 18, 0.72) !important;
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
  backdrop-filter: blur(18px);
}

.brand-title {
  letter-spacing: 0.02em;
}

.mobile-trigger {
  display: none;
}

.desktop-link {
  text-transform: none;
  letter-spacing: 0;
}

/* === RESPONSIVE === */
/* Tablet and smaller desktop */
@media (max-width: 1180px) {
  .app-layout {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }

  .sidebar-menu {
    display: none;
  }

  .mobile-trigger {
    display: inline-flex;
  }

  .desktop-link {
    display: none;
  }
}

/* Large mobile / Small tablet */
@media (max-width: 960px) {
  .app-layout {
    padding: 24px;
    gap: 20px;
  }
}

/* Mobile devices */
@media (max-width: 700px) {
  .app-layout {
    padding: 16px;
    gap: 16px;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .app-layout {
    padding: 12px;
  }
}
</style>
