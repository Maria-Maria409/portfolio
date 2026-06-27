<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <p class="section-kicker mb-3">Experience</p>
        <h2 class="section-title font-weight-black mb-4">Work Experience</h2>
        <p class="section-subtitle">
          Product-focused development across mobile apps, web platforms, automation, and APIs.
        </p>
      </div>
      
      <v-row class="experience-section">
        <v-col
          v-for="(experience, index) in experiences"
          :key="experience.id"
          cols="12"
          class="experience-item"
        >
          <div class="experience-container">
            <div class="experience-icon">
             <!--  <v-avatar size="64" color="primary">
                <v-icon size="32">mdi-briefcase</v-icon>
              </v-avatar> -->
            </div>

            <v-card
              class="experience-card glass-panel pa-6 flex-grow-1"
              elevation="0"
            >
              <div class="d-flex justify-space-between align-start mb-4">
                <div class="flex-grow-1">
                  <h3 class="text-h5 font-weight-bold mb-2">
                    {{ experience.position }}
                  </h3>
                  <h4 class="text-h6 text-primary mb-2">
                    {{ experience.company }}
                  </h4>
                  <div class="d-flex gap-2 mb-2">
                    <v-chip
                      size="small"
                      color="primary"
                      variant="flat"
                    >
                      {{ experience.period }}
                    </v-chip>
                    <v-chip
                      v-if="experience.type"
                      size="small"
                      color="secondary"
                      variant="flat"
                    >
                      {{ experience.type }}
                    </v-chip>
                  </div>
                </div>
              </div>

              <p
                class="text-body-1 mb-4"
                v-html="experience.description"
              ></p>

              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="tech in experience.technologies"
                  :key="tech"
                  size="small"
                  variant="outlined"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const experiences = [
  {
    id: 'seniorFullStack',
    position: 'Full-Stack Developer, Remote',
    company: 'Banana Navy',
    period: '2021 - Present',
    type: 'Full-time',
    description: 'Developed a B2B networking mobile application using React Native and Nest.js. Designed automated RPA workflows with Robocorp and built mobile-first products with FlutterFlow.',
    technologies: ['React Native', 'Nest.js', 'FlutterFlow', 'Robocorp', 'MongoDB', 'Neo4j'],
  },
  {
    id: 'fullStack',
    position: 'Web Developer Intern',
    company: 'Banana Sales Club',
    period: '01/2022 - 06/2022',
    type: 'Full-time',
    description: 'Developed web applications using Vue.js, Vuetify, and Nuxt.js.<br>Contributed to a professional networking platform for sales professionals.<br>Implemented AI-powered recommendations, real-time notifications, and interactive networking tools.',
    technologies: ['React', 'Vue.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'frontend',
    position: 'Web Developer Intern',
    company: 'Mind Engineering',
    period: '2019 - 2020',
    type: 'Full-time',
    description: 'Created and maintained responsive web applications, ensuring functionality across platforms.<br>Enhanced user interfaces with front-end frameworks to improve user experience.',
    technologies: ['JavaScript', 'React', 'CSS3', 'Sass', 'Webpack'],
  },
]
</script>

<style scoped>
.experience-item {
  display: flex;
  align-items: flex-start;
}

.experience-container {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}
.experience-section {
  position: relative;
  
}
.experience-icon {
  flex-shrink: 0;
  margin-top: 8px;
}

.experience-card {
  border-radius: 22px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 60px rgba(20, 184, 166, 0.14) !important;
}

/* === RESPONSIVE === */
@media (max-width: 960px) {
  .experience-container {
    gap: 12px;
  }

  .experience-section {
    left: 0;
  }

  .experience-icon {
    margin-top: 4px;
  }

  .experience-card {
    padding: 16px !important;
  }
}

@media (max-width: 700px) {
  .experience-container {
    flex-direction: column;
    gap: 12px;
  }

  .experience-icon {
    margin-top: 0;
  }

  .experience-card {
    padding: 12px !important;
  }
}

@media (max-width: 480px) {
  .experience-icon :deep(.v-avatar) {
    width: 48px !important;
    height: 48px !important;
  }

  .experience-icon :deep(.v-icon) {
    font-size: 24px !important;
  }

  .experience-card {
    padding: 12px !important;
  }

  .experience-card :deep(.text-h5) {
    font-size: 1.1rem !important;
  }
}

.section-container {
  scroll-margin-top: 90px;
}
</style>

