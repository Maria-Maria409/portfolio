<template>
  <v-dialog v-model="dialog" fullscreen>
    <div class="mobile-nav">
      <v-btn icon="mdi-close" variant="text" class="close-btn-mobile" @click="dialog = false"></v-btn>

      <div class="mobile-nav-inner">
        <p class="section-kicker mb-4">Navigate</p>
        <h2 class="mobile-title mb-8">Mariam Soudeni</h2>

        <nav class="mobile-links" aria-label="Mobile navigation">
          <button
            v-for="item in menuItems"
            :key="item.id"
            type="button"
            @click="handleNav(item.id)"
          >
            <v-icon size="22">{{ item.icon }}</v-icon>
            <span>{{ item.label }}</span>
          </button>
        </nav>

        <div class="mobile-contact glass-panel">
          <p>Available for freelance projects and full-time roles.</p>
          <a href="mailto:mariam.hitech@gmail.com">mariam.hitech@gmail.com</a>
        </div>
      </div>
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
const menuItems = [
  { id: 'about', label: 'About', icon: 'mdi-account-outline' },
  { id: 'experience', label: 'Experience', icon: 'mdi-briefcase-outline' },
  { id: 'education', label: 'Education', icon: 'mdi-school-outline' },
  { id: 'skills', label: 'Skills', icon: 'mdi-code-tags' },
  { id: 'portfolio', label: 'Portfolio', icon: 'mdi-view-grid-outline' },
  { id: 'contact', label: 'Contact', icon: 'mdi-send-outline' },
]

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
.mobile-nav {
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: 26px;
  background:
    radial-gradient(circle at 18% 12%, rgba(20, 184, 166, 0.22), transparent 22rem),
    radial-gradient(circle at 90% 0%, rgba(249, 115, 22, 0.16), transparent 22rem),
    rgba(7, 10, 18, 0.96);
}

.mobile-nav-inner {
  width: min(100%, 520px);
}

.mobile-title {
  color: #f8fafc;
  font-size: clamp(2.4rem, 14vw, 4.4rem);
  font-weight: 900;
  line-height: 0.94;
}

.mobile-links {
  display: grid;
  gap: 12px;
}

.mobile-links button {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  min-height: 58px;
  padding: 12px 18px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.72);
  color: #f8fafc;
  font: inherit;
  font-size: 1.05rem;
  font-weight: 800;
  text-align: left;
}

.mobile-contact {
  margin-top: 28px;
  padding: 18px;
  border-radius: 20px;
  color: rgba(226, 232, 240, 0.78);
}

.mobile-contact a {
  display: inline-block;
  margin-top: 8px;
  color: #5eead4;
  font-weight: 800;
  text-decoration: none;
}

.close-btn-mobile {
  position: fixed;
  top: 16px;
  right: 16px;
  color: #f8fafc;
  z-index: 10;
}
</style>
