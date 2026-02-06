<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">Skills & Expertise</h2>
        <p class="text-body-1 text-medium-emphasis">
          Technologies and tools I work with
        </p>
      </div>

      <v-row>
        <v-col
          v-for="category in skillCategories"
          :key="category.name"
          cols="12"
          md="6"
          class="mb-8"
        >
          <v-card class="skill-category-card pa-6" elevation="4">
            <div class="d-flex align-center mb-6">
              <v-icon size="32" color="primary" class="mr-3">
                {{ category.icon }}
              </v-icon>
              <h3 class="text-h5 font-weight-bold">{{ category.name }}</h3>
            </div>
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="mb-6"
            >
              <div class="d-flex justify-space-between mb-2">
                <span class="text-body-1 font-weight-medium">{{ skill.name }}</span>
                <span class="text-body-2 text-medium-emphasis">{{ skill.level }}%</span>
              </div>
              <v-progress-linear
                :model-value="skill.level"
                color="primary"
                height="8"
                rounded
                class="skill-bar"
              ></v-progress-linear>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12">
          <h3 class="text-h5 font-weight-bold mb-6 text-center">Tools & Technologies</h3>
          <div class="d-flex flex-wrap justify-center ga-3">
            <v-chip
              v-for="tool in tools"
              :key="tool"
              size="large"
              color="primary"
              variant="flat"
              prepend-icon="mdi-check-circle"
            >
              {{ tool }}
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const skillCategories = [
  {
    name: 'Frontend Development',
    icon: 'mdi-monitor',
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 90 },
      { name: 'React Native', level: 90 },
      { name: 'JavaScript/TypeScript', level: 92 },
      { name: 'HTML/CSS', level: 98 },
      { name: 'Vuetify/Material-UI', level: 88 },
    ],
  },
  {
    name: 'Backend Development',
    icon: 'mdi-server',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'RESTful APIs', level: 92 },
      { name: 'Nest.js', level: 80 },
    ],
  },
  {
    name: 'Database & Cloud',
    icon: 'mdi-database',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Redis', level: 78 },
    ],
  },
  {
    name: 'Design & Tools',
    icon: 'mdi-palette',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 75 },
    ],
  },
]

const tools = [
  'Git',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'Jira',
  'Figma',
  'VS Code',
  'Postman',
  'MongoDB Atlas',
  'AWS S3',
  'CloudFront',
  'Lambda',
]
</script>

<style scoped>
.skill-category-card {
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid #6366f1;
}

.skill-category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}
</style>

