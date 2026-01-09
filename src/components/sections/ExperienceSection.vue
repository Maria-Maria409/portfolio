<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">{{ $t('experience.title') }}</h2>
        <p class="text-body-1 text-medium-emphasis">
          {{ $t('experience.subtitle') }}
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
                  {{ $t(`experience.${experience.id}.position`) }}
                </h3>
                <h4 class="text-h6 text-primary mb-2">
                  {{ $t(`experience.${experience.id}.company`) }}
                </h4>
                <v-chip
                  size="small"
                  color="primary"
                  variant="flat"
                  class="mr-2"
                >
                  {{ $t(`experience.${experience.id}.period`) }}
                </v-chip>
                <v-chip
                  v-if="$t(`experience.${experience.id}.type`)"
                  size="small"
                  color="secondary"
                  variant="flat"
                >
                  {{ $t(`experience.${experience.id}.type`) }}
                </v-chip>
              </div>
            </div>

            <p
              class="text-body-1 mb-4"
              v-html="$t(`experience.${experience.id}.description`)"
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
    technologies: ['Vue.js', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
  },
  {
    id: 'fullStack',
    technologies: ['React', 'Vue.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'frontend',
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

