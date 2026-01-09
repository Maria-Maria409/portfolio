<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">My Portfolio</h2>
        <p class="text-body-1 text-medium-emphasis">
          A showcase of my recent projects and work
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="portfolio-card pa-0"
            elevation="4"
            @click="openProject(project)"
          >
            <v-img
              :src="project.image"
              :height="project.category === 'Mobile Application' ? 300 : 200"
              :cover="project.category !== 'Mobile Application'"
              :contain="project.category === 'Mobile Application'"
              class="portfolio-image"
              :class="{ 'mobile-image': project.category === 'Mobile Application' }"
            >
              <div class="portfolio-overlay">
                <v-btn
                  icon
                  color="white"
                  variant="text"
                  size="large"
                  @click.stop="openProject(project)"
                >
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
              </div>
            </v-img>
            <v-card-title class="text-h6 font-weight-bold">
              {{ project.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ project.category }}
            </v-card-subtitle>
            <v-card-text>
              <p class="text-body-2">{{ project.description }}</p>
              <div class="d-flex flex-wrap ga-2 mt-4">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="small"
                  variant="outlined"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                prepend-icon="mdi-open-in-new"
                variant="text"
                color="primary"
              >
                Live Demo
              </v-btn>
              <v-btn
                v-if="project.github"
                :href="project.github"
                target="_blank"
                prepend-icon="mdi-github"
                variant="text"
                color="primary"
              >
                GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        
        <!-- More Projects Card -->
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="more-projects-card pa-0"
            elevation="4"
          >
            <div class="more-projects-content">
              <div class="more-projects-icon">
                <v-icon size="64" color="primary">mdi-dots-horizontal</v-icon>
              </div>
              <v-card-title class="text-h6 font-weight-bold text-center justify-center">
                More Projects
              </v-card-title>
              <v-card-text class="text-center">
                <p class="text-body-2 text-medium-emphasis">
                  Additional projects are available upon request
                </p>
                <div class="more-projects-dots">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" max-width="1600" scrollable>
      <v-card v-if="selectedProject" class="project-dialog-card">
        <v-carousel
          v-if="selectedProject.images && selectedProject.images.length > 0"
          :height="selectedProject.category === 'Mobile Application' ? 900 : selectedProject.category === 'Web Application' ? 900 : 850"
          show-arrows="hover"
          cycle
          class="project-carousel"
        >
          <v-carousel-item
            v-for="(image, idx) in selectedProject.images"
            :key="idx"
            :src="image"
            :cover="selectedProject.category !== 'Mobile Application' && selectedProject.category !== 'Web Application'"
            :contain="selectedProject.category === 'Mobile Application' || selectedProject.category === 'Web Application'"
            :class="{ 
              'mobile-carousel-item': selectedProject.category === 'Mobile Application',
              'web-carousel-item': selectedProject.category === 'Web Application'
            }"
          ></v-carousel-item>
        </v-carousel>
        <v-img
          v-else
          :src="selectedProject.image"
          :height="selectedProject.category === 'Mobile Application' ? 700 : selectedProject.category === 'Web Application' ? 700 : 650"
          :cover="selectedProject.category !== 'Mobile Application' && selectedProject.category !== 'Web Application'"
          :contain="selectedProject.category === 'Mobile Application' || selectedProject.category === 'Web Application'"
          :class="{ 
            'mobile-image': selectedProject.category === 'Mobile Application',
            'web-image': selectedProject.category === 'Web Application'
          }"
        ></v-img>
    <!--     <v-card-title class="text-h5 pa-3">
          {{ selectedProject.title }}
        </v-card-title>
        <v-card-subtitle class="pa-3 pt-0">
          {{ selectedProject.category }}
        </v-card-subtitle>
        <v-card-text class="project-description pa-3">
          <p class="text-body-2 mb-2">{{ selectedProject.fullDescription }}</p>
          <h4 class="text-subtitle-2 mb-1">Technologies Used:</h4>
          <div class="d-flex flex-wrap ga-1 mb-2">
            <v-chip
              v-for="tech in selectedProject.technologies"
              :key="tech"
              size="x-small"
              color="primary"
              variant="flat"
            >
              {{ tech }}
            </v-chip>
          </div>
        </v-card-text> -->
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn
            v-if="selectedProject.demo"
            :href="selectedProject.demo"
            target="_blank"
            prepend-icon="mdi-open-in-new"
            color="primary"
            size="small"
          >
            Live Demo
          </v-btn>
          <v-btn
            v-if="selectedProject.github"
            :href="selectedProject.github"
            target="_blank"
            prepend-icon="mdi-github"
            variant="outlined"
            size="small"
          >
            GitHub
          </v-btn>
          <v-btn
            variant="text"
            size="small"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

// Import images for each project
import bsc01 from '@/assets/images/Mariam-Soudeni/BSC-APP/BSC01.PNG'
import bsc02 from '@/assets/images/Mariam-Soudeni/BSC-APP/BSC02.PNG'
import bsc03 from '@/assets/images/Mariam-Soudeni/BSC-APP/BSC03.PNG'
import bsc04 from '@/assets/images/Mariam-Soudeni/BSC-APP/BSC04.PNG'
import bsc05 from '@/assets/images/Mariam-Soudeni/BSC-APP/BSC05.PNG'
import bsc06 from '@/assets/images/Mariam-Soudeni/BSC-APP/BSC06.PNG'
import bsc07 from '@/assets/images/Mariam-Soudeni/BSC-APP/BSC07.PNG'

import hnb00 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP00.png'
import hnb01 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP01.png'
import hnb02 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP02.png'
import hnb03 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP03.png'
import hnb04 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP04.png'
import hnb05 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP05.png'
import hnb06 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP06.png'
import hnb07 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP07.png'
import hnb08 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP08.png'
import hnb09 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP09.png'
import hnb10 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP10.png'
import hnb11 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP11.png'
import hnb12 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP12.png'
import hnb13 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP13.png'
import hnb14 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP14.png'
import hnb15 from '@/assets/images/Mariam-Soudeni/HNB-APP/HNB-APP15.png'


import jva05 from '@/assets/images/Mariam-Soudeni/JVA/JVA05.png'

import tsunami00 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI00.png'
import tsunami01 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI01.png'
import tsunami02 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI02.png'
import tsunami03 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI03.png'
import tsunami04 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI04.png'
import tsunami05 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI05.png'
import tsunami06 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI06.png'
import tsunami07 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI07.png'
import tsunami08 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI08.png'
import tsunami09 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI09.png'
import tsunami10 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI10.png'
import tsunami11 from '@/assets/images/Mariam-Soudeni/TSUNAMI-APP/TSUNAMI11.png'

const dialog = ref(false)
const selectedProject = ref(null)

const projects = [
  {
    title: 'BSC App',
    category: 'Mobile Application',
    description: 'A B2B networking mobile application',
    fullDescription: 'A comprehensive mobile application built with modern technologies. Features include user authentication, real-time data synchronization, and intuitive user interface.',
    image: bsc01,
    images: [bsc01, bsc02, bsc03, bsc04, bsc05, bsc06, bsc07],
    technologies: ['React Native', 'NestJs', 'MongoDB', 'IA','Neo4j','WebSocket'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'HNB App',
    category: 'Mobile Application',
    description: 'A user-friendly app for horse owners to manage care routines and expenses.',
    fullDescription: 'A secure banking application that provides users with easy access to their accounts, transaction history, and banking services. Features include biometric authentication and real-time notifications.',
    image: hnb00,
    images: [hnb00, hnb01, hnb02, hnb03, hnb04, hnb05, hnb06, hnb07, hnb08, hnb09, hnb10, hnb11, hnb12, hnb13, hnb14, hnb15],
    technologies: ['FlutterFlow', 'Supabase'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
 
  {
    title: 'Tsunami App',
    category: 'Mobile Application',
    description: 'Enabling users to connect with their favorite celebrities and request personalized messages or videos.',
    fullDescription: 'A feature-rich mobile application that provides users with a complete solution. Includes advanced functionality, beautiful UI, and seamless performance.',
    image: tsunami00,
    images: [tsunami00, tsunami01, tsunami02, tsunami03, tsunami04, tsunami05, tsunami06, tsunami07, tsunami08, tsunami09, tsunami10, tsunami11],
    technologies: ['React Native', 'NestJs','MongoDb', 'WebSocket','Stripe','Paypal'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'JVA Application',
    category: 'Web Application',
    description: 'A website for instant vehicle price estimation with no registration required.',
    fullDescription: 'A modern web application featuring responsive design and smooth user experience. Built with cutting-edge technologies and best practices.',
    image: jva05,
    images: [ jva05],
    technologies: ['Vue.js', 'vuetify.js', 'NestJs', 'IA','Python','Robocorp'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
]

const openProject = (project) => {
  selectedProject.value = project
  dialog.value = true
}
</script>

<style scoped>
/* Ensure all columns have equal height */
.v-row > .v-col {
  display: flex;
  flex-direction: column;
}

.portfolio-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.portfolio-card :deep(.v-card-title),
.portfolio-card :deep(.v-card-subtitle),
.portfolio-card :deep(.v-card-text) {
  flex-shrink: 0;
}

.portfolio-card :deep(.v-card-text) {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.portfolio-card :deep(.v-card-actions) {
  flex-shrink: 0;
  margin-top: auto;
}

.portfolio-image {
  position: relative;
  background-color: #f5f5f5;
  flex-shrink: 0;
}

.portfolio-image.mobile-image {
  background-color: #000;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.project-carousel {
  background-color: #000;
}

.project-carousel :deep(.v-carousel__controls) {
  display: none;
}

.mobile-carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}

.mobile-carousel-item :deep(.v-img) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.web-carousel-item {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.web-carousel-item :deep(.v-img) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.project-dialog-card {
  overflow: hidden;
}

.web-image {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.web-image :deep(.v-img__img) {
  object-fit: contain;
  margin: 0 auto;
}

.project-description {
  max-height: 200px;
  overflow-y: auto;
}

.more-projects-card {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
  border: 2px dashed rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
  cursor: default;
}

.more-projects-card:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  border-color: rgba(99, 102, 241, 0.5);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.more-projects-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
}

.more-projects-icon {
  margin-bottom: 24px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.more-projects-dots {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
}

.more-projects-dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
  animation: dotPulse 1.5s ease-in-out infinite;
}

.more-projects-dots .dot:nth-child(1) {
  animation-delay: 0s;
}

.more-projects-dots .dot:nth-child(2) {
  animation-delay: 0.3s;
}

.more-projects-dots .dot:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes dotPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}
</style>

