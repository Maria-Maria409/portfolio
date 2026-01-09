<template>
  <aside class="sidebar-menu">
    <ul class="menu-list">
      <li
        v-for="item in menuItems"
        :key="item.id"
        class="menu-item"
        @click="handleClick(item.id)"
      >
        <a href="#" @click.prevent>
          <div class="icon">
            <v-icon size="40">{{ item.icon }}</v-icon>
          </div>
          <span class="text">{{ $t(`sidebarMenu.${item.id}`) }}</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['navigate']);

const menuItems = [
  { id: 'experience', label: 'Experience', icon: 'mdi-laptop' },
  { id: 'education', label: 'Education', icon: 'mdi-school' },
  { id: 'certifications', label: 'Certifications', icon: 'mdi-certificate' },
  { id: 'skills', label: 'Skills', icon: 'mdi-chat' },
  { id: 'portfolio', label: 'Portfolio', icon: 'mdi-file-multiple' },
  { id: 'mail', label: 'Mail', icon: 'mdi-email' },
];

const handleClick = (itemId) => {
  // Map menu item IDs to section IDs
  const sectionMap = {
    'experience': 'experience',
    'education': 'education',
    'certifications': 'education', // Certifications are in the education section
    'skills': 'skills',
    'portfolio': 'portfolio',
    'mail': 'contact' // Mail maps to contact section
  };
  
  const sectionId = sectionMap[itemId] || itemId;
  emit('navigate', sectionId);
};
</script>

<style scoped>
.sidebar-menu {
  width: 72px;
  padding: 16px 0;
  background: #3d0066;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(13, 2, 31, 0.25);
  justify-items: center;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;
}

.menu-item {
  position: relative;
  cursor: pointer;
}

.menu-item a {
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  text-decoration: none;
  z-index: 999;
}

.icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  position: relative;
  z-index: 1;
}

/* Tooltip bubble sliding in from right */
.text {
  position: absolute;
  top: 50%;
  width: 250%;
  left: 20%; /* start fully to the right of the icon */
  transform: translateY(-50%) translateX(20px); /* start offset to the right */
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0, 1.73, 1, 1.02);
  z-index: 0;
  text-align: end;
}

/* On hover, slide in from right → left */
.menu-item:hover .text {
  opacity: 1;
  transform: translateY(-50%) translateX(0); /* slide to position */
}

/* Optional gradient background effect behind icon */
.menu-item::before {
  content: "";
  position: absolute;
  top: 16px;
  left: 0;
  width: 0;
  height: 40px;
  border-radius: 7px;
  background: linear-gradient(120deg, #ff00aa, #00ff85);
  opacity: 0;
  transition: all 0.75s ease-out;
  z-index: 0;
}

.menu-item:hover::before {
  width: 10%;
  opacity: 1;
}
</style>
