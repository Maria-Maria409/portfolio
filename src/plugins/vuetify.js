import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#14b8a6',
          secondary: '#f97316',
          accent: '#f43f5e',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
          success: '#10b981',
          background: '#070a12',
          surface: '#111827',
          'surface-variant': '#182235',
        },
      },
      light: {
        colors: {
          primary: '#0f766e',
          secondary: '#ea580c',
          accent: '#e11d48',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
          success: '#10b981',
          background: '#ffffff',
          surface: '#f8fafc',
        },
      },
    },
  },
})

