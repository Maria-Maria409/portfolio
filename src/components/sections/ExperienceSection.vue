<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">Work Experience</h2>
        <p class="text-body-1 text-medium-emphasis">
          My professional journey and career milestones
        </p>
      </div>
      <div class="custom-timeline">
        <div
          v-for="(experience, index) in experiences"
          :key="experience.id"
          class="timeline-item d-flex"
        >
          <div class="timeline-marker">
            <span class="timeline-dot"></span>
          </div>

          <v-card
            class="experience-card pa-6"
            elevation="4"
            :color="index % 2 === 0 ? 'surface' : 'surface-variant'"
          >
            <div class="d-flex justify-space-between align-start mb-4">
              <div>
                <h3 class="text-h5 font-weight-bold mb-2">
                  {{ experience.position }}
                </h3>
                <h4 class="text-h6 text-primary mb-2">
                  {{ experience.company }}
                </h4>
                <v-chip
                  size="small"
                  color="primary"
                  variant="flat"
                  class="mr-2"
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
      </div>
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
.custom-timeline {
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
  padding-left: 48px;
}

.custom-timeline::before {
  content: '';
  position: absolute;
  left: 18px;
  top: -220px;
  bottom: 0;
  width: 5px;
  background: linear-gradient(180deg, #6366f1 0%, #ec4899 100%);
}

.timeline-item {
  position: relative;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 32px;
/*   padding-left: 32px;
 */
}

.timeline-marker {
  position: relative;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -40px;
}

.timeline-dot {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
  z-index: 1;
}

.experience-card {
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: min(900px, 100%); /* fixed card width while staying responsive */

}

.experience-card:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}
</style>

