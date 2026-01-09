<template>
  <div class="home-container">
    <ExperienceSection id="experience" />
    <EducationSection id="education" />
    <SkillsSection id="skills" />
    <PortfolioSection id="portfolio" />
    <ContactSection id="contact" />
  </div>
</template>

<script setup>
import AboutSection from '../components/sections/AboutSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import EducationSection from '../components/sections/EducationSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import PortfolioSection from '../components/sections/PortfolioSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>

<style scoped>
.home-container {
  min-height: 100vh;
}
</style>

