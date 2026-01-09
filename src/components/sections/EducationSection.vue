<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">Education</h2>
        <p class="text-body-1 text-medium-emphasis">
          My academic background and certifications
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(education, index) in educations"
          :key="index"
          cols="12"
          md="6"
        >
          <v-card
            class="education-card pa-6 h-100"
            elevation="4"
            :color="index % 2 === 0 ? 'surface' : 'surface-variant'"
          >
            <div class="d-flex align-center mb-4">
              <v-avatar size="64" color="primary" class="mr-4">
                <v-icon size="32">mdi-school</v-icon>
              </v-avatar>
              <div>
                <h3 class="text-h5 font-weight-bold">
                  {{ education.degree }}
                </h3>
                <h4 class="text-h6 text-primary">{{ education.institution }}</h4>
              </div>
            </div>
            <v-chip
              size="small"
              color="primary"
              variant="flat"
              class="mb-4"
            >
              {{ education.period }}
            </v-chip>
            <p class="text-body-1">{{ education.description }}</p>
            <div v-if="education.gpa" class="mt-4">
              <v-chip size="small" color="success" variant="flat">
                GPA: {{ education.gpa }}
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12">
          <h3 class="text-h5 font-weight-bold mb-6 text-center">Certifications</h3>
          <v-row>
            <v-col
              v-for="(cert, index) in certifications"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card class="cert-card pa-4" elevation="2">
                <div class="d-flex align-center">
                  <v-icon size="32" color="primary" class="mr-3">
                    mdi-certificate
                  </v-icon>
                  <div>
                    <h4 class="text-h6 font-weight-bold">{{ cert.name }}</h4>
                    <p class="text-body-2 text-medium-emphasis">{{ cert.issuer }}</p>
                    <p class="text-caption">{{ cert.date }}</p>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const educations = [
  {
    degree: "Master's Degree in Media Engineering",
    institution: 'ISAMM, Higher Institute of Multimedia Arts of Manouba',
    period: ' 2020 – 2022',
  description:'Specialized in software engineering and web development. Completed various projects and participated in coding competitions.',
   // gpa: '3.8/4.0',
  },
  {
    degree: 'Applied License in Information and Communication Technology Management,',
    institution: "ISET'COM, Higher Institute of Technological Studies in Communications of Tunis",
    period: '2017 – 2020',
    description:'Advanced studies in software architecture, cloud computing, and modern web technologies. Thesis focused on scalable web applications.',
   // gpa: '3.9/4.0',
  },
]

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2022',
  },
  {
    name: 'Vue.js Certification',
    issuer: 'Vue School',
    date: '2021',
  },
  {
    name: 'Node.js Advanced Certification',
    issuer: 'Node.js Foundation',
    date: '2020',
  },
]
</script>

<style scoped>
.education-card {
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid #6366f1;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.cert-card {
  border-radius: 12px;
  transition: transform 0.3s ease;
  border-left: 3px solid #6366f1;
}

.cert-card:hover {
  transform: translateX(5px);
}
</style>

