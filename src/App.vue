<template>
  <v-app>
  <v-app-bar
     
      elevation="0"
      height="64"
    >
      <v-app-bar-nav-icon @click="dialog = true" />
      <v-toolbar-title class="font-weight-bold">{{ $t('app.portfolioTitle') }}</v-toolbar-title>
    </v-app-bar>

    <MobileNavDialog v-model="dialog" @navigate="handleNavigation" />

    <v-main>
      <div class="app-layout">
        <SidebarMenu ref="sidebarMenu" class="sidebar-menu" @navigate="handleNavigation" />

        <HeroSection :hero-section-style="heroSectionStyle" @navigate="handleNavigation" />
      </div>
      <PhotoCard />
      <LineElement />

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
import PhotoCard from './components/PhotoCard.vue'
import LineElement from './components/LineElement.vue'

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
  gap: 32px;
  padding: 32px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
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

