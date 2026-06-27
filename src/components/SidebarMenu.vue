<template>
  <aside class="sidebar-menu">
    <button
      v-for="item in menuItems"
      :key="item.id"
      class="menu-item"
      type="button"
      :aria-label="item.label"
      @click="handleClick(item.id)"
    >
      <v-icon size="24">{{ item.icon }}</v-icon>
      <span>{{ item.label }}</span>
    </button>
  </aside>
</template>

<script setup>
const emit = defineEmits(['navigate'])

const menuItems = [
  { id: 'about', label: 'About', icon: 'mdi-account-outline' },
  { id: 'experience', label: 'Experience', icon: 'mdi-briefcase-outline' },
  { id: 'education', label: 'Education', icon: 'mdi-school-outline' },
  { id: 'skills', label: 'Skills', icon: 'mdi-code-tags' },
  { id: 'portfolio', label: 'Work', icon: 'mdi-view-grid-outline' },
  { id: 'contact', label: 'Contact', icon: 'mdi-send-outline' },
]

const handleClick = (itemId) => {
  emit('navigate', itemId)
}
</script>

<style scoped>
.sidebar-menu {
  position: sticky;
  top: 88px;
  z-index: 4;
  width: 82px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 999px;
  background: rgba(7, 10, 18, 0.72);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(18px);
}

.menu-item {
  position: relative;
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: rgba(226, 232, 240, 0.8);
  cursor: pointer;
  transition: color 0.22s ease, background 0.22s ease, transform 0.22s ease;
}

.menu-item:hover {
  color: #071018;
  background: #5eead4;
  transform: translateY(-2px);
}

.menu-item span {
  position: absolute;
  left: calc(100% + 14px);
  top: 50%;
  min-width: max-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(248, 250, 252, 0.94);
  color: #071018;
  font-size: 0.82rem;
  font-weight: 800;
  opacity: 0;
  transform: translate(-8px, -50%);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.24);
}

.menu-item:hover span {
  opacity: 1;
  transform: translate(0, -50%);
}
</style>
