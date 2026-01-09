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
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#ec4899',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
          success: '#10b981',
          background: '#0f172a',
          surface: '#1e293b',
        },
      },
      light: {
        colors: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#ec4899',
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

