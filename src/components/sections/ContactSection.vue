<template>
  <v-container class="section-container py-16" fluid>
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">Get In Touch</h2>
        <p class="text-body-1 text-medium-emphasis">
          I'm always open to discussing new projects, creative ideas, or opportunities
        </p>
      </div>

      <v-row>
        <v-col cols="12" md="4">
          <v-card
            v-for="contact in contactInfo"
            :key="contact.type"
            class="contact-card mb-4 pa-6"
            elevation="4"
          >
            <div class="d-flex align-center">
              <v-avatar
                size="56"
                :color="contact.color"
                class="mr-4"
              >
                <v-icon size="28" color="white">{{ contact.icon }}</v-icon>
              </v-avatar>
              <div>
                <h3 class="text-h6 font-weight-bold mb-1">{{ contact.type }}</h3>
                <p class="text-body-2 text-medium-emphasis">{{ contact.value }}</p>
                <a
                  v-if="contact.link"
                  :href="contact.link"
                  class="text-primary text-decoration-none"
                >
                  {{ contact.label }}
                </a>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <v-card class="contact-form-card pa-6" elevation="4">
            <h3 class="text-h5 font-weight-bold mb-6">Send me a message</h3>
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
              <v-text-field
                v-model="name"
                label="Name"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                :rules="[rules.required]"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                type="email"
                :rules="[rules.required, rules.email]"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="subject"
                label="Subject"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                :rules="[rules.required]"
                class="mb-4"
              ></v-text-field>

              <v-textarea
                v-model="message"
                label="Message"
                prepend-inner-icon="mdi-message-text"
                variant="outlined"
                rows="6"
                :rules="[rules.required]"
                class="mb-4"
              ></v-textarea>

              <v-btn
                type="submit"
                color="primary"
                size="large"
                prepend-icon="mdi-send"
                :loading="loading"
                block
              >
                Send Message
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="3000">
      {{ snackbarText }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const valid = ref(false)
const loading = ref(false)
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const rules = {
  required: (value) => !!value || 'This field is required',
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Invalid email address'
  },
}

const contactInfo = [
  {
    type: 'Email',
    value: 'mariam.hitech@gmail.com',
    label: 'Send email',
    link: 'mailto:mariam.hitech@gmail.com',
    icon: 'mdi-email',
    color: 'primary',
  },
  {
    type: 'Phone',
    value: '+216 25 311 717',
    label: 'Call me',
    link: 'tel:+21625311717',
    icon: 'mdi-phone',
    color: 'success',
  },
  {
    type: 'Location',
    value: 'Tunis, Tunisia',
    label: 'View on map',
    link: 'https://www.google.com/maps/place/Tunis+1000/@36.8181856,10.1640137,15z/data=!4m6!3m5!1s0x12fd345a75337dbd:0xdbf24aee14ad6edf!8m2!3d36.8181856!4d10.1640137!16s%2Fg%2F11c48csqgr?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D',
    icon: 'mdi-map-marker',
    color: 'error',
  },
]

const submitForm = async () => {
  if (!valid.value) return

  loading.value = true

  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID 
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    await emailjs.send(
      serviceId,
      templateId,
      {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      },
      { publicKey }
    )

    snackbarText.value = 'Message sent successfully! I will get back to you soon.'
    snackbarColor.value = 'success'
    snackbar.value = true

    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
  } catch (error) {
    console.error('EmailJS Error:', error)
    snackbarText.value = 'Failed to send message. Please try again later.'
    snackbarColor.value = 'error'
    snackbar.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-card {
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid;
}

.contact-card:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.contact-form-card {
  border-radius: 16px;
}
</style>

