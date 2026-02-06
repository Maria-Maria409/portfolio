<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">Work Experience</h2>
        <p class="text-body-1 text-medium-emphasis">
          My professional journey and career milestones
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
              class="experience-card pa-6 flex-grow-1"
              elevation="4"
              :color="index % 2 === 0 ? 'surface' : 'surface-variant'"
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
    position: ' Full-Stack Developer, Remotly',
    company: 'Banana Navy',
    period: '2021 - Present',
    type: 'Full-time',
    description: 'Developed a B2B networking mobile application using React Native and Nest.js.Designed automated RPA workflows using Robocorp.Built and deployed mobile-first apps with FlutterFlow.',
    technologies: ['Vue.js', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
  },
  {
    id: 'fullStack',
    position: ' Web Developer Intern',
    company: 'Banana Sales Club',
    period: '01/2022 – 06/2022',
    type: 'Full-time',
    description: 'Developed web applications using Vue.js, Vuetify, and Nuxt.js.<br>Contributed to a professional networking platform for sales professionals.<br>Implemented AI-powered recommendations, real-time notifications, and interactive networking tools.',
    technologies: ['React', 'Vue.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'frontend',
    position: ' Web Developer Intern',
    company: 'Mind Engineering',
    period: ' 2019 – 2020',
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
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
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
  border-top: solid;
  border-left: solid;
  border-color: white;
  border-width: thick;
  max-width: 68%;
  border-image-source: linear-gradient(62deg, #6366f1 0%, #ec4899 100%);
  border-image-slice: 1;
  padding: 24px 16px;
}

@media (max-width: 1180px) {
  .section-container {
    max-width: 85%;
  }
}

@media (max-width: 960px) {
  .section-container {
    max-width: 100%;
    padding: 20px 12px;
  }
}

@media (max-width: 700px) {
  .section-container {
    padding: 16px 10px;
  }
}

@media (max-width: 480px) {
  .section-container {
    border-width: medium;
    padding: 12px 8px;
  }
}
</style>

