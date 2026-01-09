<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">{{ $t('skills.title') }}</h2>
        <p class="text-body-1 text-medium-emphasis">
          {{ $t('skills.subtitle') }}
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(category, categoryIndex) in skillCategories"
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
              <h3 class="text-h5 font-weight-bold">{{ $t(`skills.categories[${categoryIndex}].name`) }}</h3>
            </div>

            <v-row dense class="skill-grid">
              <v-col
                v-for="(skill, skillIndex) in category.skills"
                :key="skill.name"
                cols="12"
                sm="6"
              >
                <v-card class="skill-tile pa-4" variant="tonal">
                  <div class="d-flex align-center">
                    <v-avatar size="48" rounded class="mr-4 skill-avatar">
                      <v-img
                        :src="skill.logo"
                        :alt="skill.name"
                        cover
                      ></v-img>
                    </v-avatar>
                    <div>
                      <p class="text-body-1 font-weight-semibold mb-1">
                        {{ skill.name }}
                      </p>
                      <p class="text-body-2 text-medium-emphasis mb-0">
                        {{ skill.stack }}
                      </p>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

  <!--     <v-row class="mt-8">
        <v-col cols="12">
          <h3 class="text-h5 font-weight-bold mb-6 text-center">{{ $t('skills.toolsTitle') }}</h3>
          <div class="d-flex flex-wrap justify-center ga-3">
            <v-chip
              v-for="(tool, index) in tools"
              :key="tool"
              size="large"
              color="primary"
              variant="flat"
              prepend-icon="mdi-check-circle"
            >
              {{ $t(`skills.tools[${index}]`) }}
            </v-chip>
          </div>
        </v-col>
      </v-row> -->
    </v-container>
  </v-container>
</template>

<script setup>
const skillCategories = [
  {
    name: 'Frontend Development',
    icon: 'mdi-monitor',
    skills: [
      {
        name: 'Vue.js',
        stack: 'SPA & SSR tooling',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'React',
        stack: 'Component architecture',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'React Native',
        stack: 'Component architecture',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'JS/TS',
        stack: 'Modern ECMAScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
     
      {
        name: 'Vuetify / MUI',
        stack: 'Design systems',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      },
    ],
  },
  {
    name: 'Backend Development',
    icon: 'mdi-server',
    skills: [
      {
        name: 'Node.js',
        stack: 'Event-driven APIs',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express.js',
        stack: 'REST services',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Python',
        stack: 'Automation & data',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'RESTful APIs',
        stack: 'OpenAPI & Swagger',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
      },
      {
        name: 'NestJs',
        stack: 'Schema-driven data',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
      },
    ],
  },
  {
    name: 'Database & Cloud',
    icon: 'mdi-database',
    skills: [
      {
        name: 'MongoDB',
        stack: 'Document stores',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'SupaBase',
        stack: 'Relational data',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      },
      {
        name: 'Neo4j',
        stack: 'Caching layers',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
      },
    
      {
        name: 'Docker',
        stack: 'Containers & devops',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Digital Ocean',
        stack: 'Containers & devops',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
      },
    ],
  },
  {
    name: 'Design & Tools',
    icon: 'mdi-palette',
    skills: [
    
      {
        name: 'Figma',
        stack: 'Collaborative design',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'Canva',
        stack: 'High-fidelity mockups',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      },
      {
        name: 'Git',
        stack: 'Version control',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'CI / CD',
        stack: 'Pipelines & automation',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'Gitlab',
        stack: 'Pipelines & automation',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      },
      {
        name: 'Robocorp',
        stack: 'Research & prototyping',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/robocorp/robocorp-original.svg',
      },
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

.skill-grid {
  gap: 12px 0;
}

.skill-tile {
  border-radius: 14px;
  height: 100%;
  border: 1px solid rgba(99, 102, 241, 0.15);
  background: rgba(99, 102, 241, 0.05);
}

.skill-avatar {
  background-color: #fff;
  border: 1px solid rgba(99, 102, 241, 0.15);
}
</style>

