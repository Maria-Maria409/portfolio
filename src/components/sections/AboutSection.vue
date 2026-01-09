<template>
  <v-container class="section-container py-16">
    <v-row>
      <v-col cols="12" md="6" class="d-flex align-center">
        <div>
          <h1 class="text-h3 font-weight-bold mb-4">
            Hello, I'm
            <span class="gradient-text">John Doe</span>
          </h1>
          <h2 class="text-h5 text-medium-emphasis mb-6">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p class="text-body-1 mb-4">
            I'm a passionate full-stack developer with over 5 years of experience
            in building web applications. I specialize in Vue.js, React, Node.js,
            and modern web technologies.
          </p>
          <p class="text-body-1 mb-6">
            I love creating beautiful, functional, and user-friendly applications
            that solve real-world problems. When I'm not coding, you can find me
            exploring new technologies, contributing to open-source projects, or
            sharing knowledge with the developer community.
          </p>
          <div class="d-flex ga-4">
            <v-btn
              color="primary"
              size="large"
              prepend-icon="mdi-email"
              @click="scrollToContact"
            >
              Get In Touch
            </v-btn>
            <v-btn
              variant="outlined"
              size="large"
              prepend-icon="mdi-github"
              href="https://github.com"
              target="_blank"
            >
              View Projects
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-card
          class="profile-image-card"
          elevation="8"
          max-width="400"
        >
          <v-img
            src="https://via.placeholder.com/400x500"
            alt="Profile Image"
            cover
            height="500"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col
        v-for="stat in stats"
        :key="stat.label"
        cols="6"
        md="3"
        class="text-center"
      >
        <div class="stat-card pa-6">
          <v-icon size="48" color="primary" class="mb-4">{{ stat.icon }}</v-icon>
          <h3 class="text-h4 font-weight-bold mb-2">{{ stat.value }}</h3>
          <p class="text-body-2 text-medium-emphasis">{{ stat.label }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const stats = [
  { icon: 'mdi-briefcase', value: '5+', label: 'Years Experience' },
  { icon: 'mdi-folder-multiple', value: '50+', label: 'Projects Completed' },
  { icon: 'mdi-account-group', value: '30+', label: 'Happy Clients' },
  { icon: 'mdi-trophy', value: '10+', label: 'Awards Won' },
]

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.section-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-image-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.stat-card {
  transition: transform 0.3s ease;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.05);
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(99, 102, 241, 0.1);
}
</style>

