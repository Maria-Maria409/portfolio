# Portfolio CV - Vue.js + Vuetify

A modern, responsive CV and Portfolio website built with Vue.js 3 and Vuetify 3. Features a beautiful sidebar navigation menu and multiple sections to showcase your professional profile.

## Features

- 🎨 Modern, professional design with dark theme
- 📱 Fully responsive layout
- 🎯 Sidebar navigation menu with smooth scrolling
- 📄 Multiple sections: About, Experience, Education, Skills, Portfolio, Contact
- 🎭 Smooth animations and transitions
- 🎨 Customizable color scheme
- ⚡ Fast and lightweight
- 🔍 SEO-friendly structure

## Sections

1. **About** - Personal introduction, profile image, and key statistics
2. **Experience** - Work experience timeline with details
3. **Education** - Academic background and certifications
4. **Skills** - Technical skills with progress bars
5. **Portfolio** - Project showcase with images and details
6. **Contact** - Contact form and information

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Profile Information**: Edit `src/components/SidebarMenu.vue` to update:
   - Profile picture
   - Name and title
   - Social media links

2. **About Section**: Edit `src/components/sections/AboutSection.vue` to update:
   - Personal description
   - Statistics
   - Profile image

3. **Experience**: Edit `src/components/sections/ExperienceSection.vue` to update work experience

4. **Education**: Edit `src/components/sections/EducationSection.vue` to update education and certifications

5. **Skills**: Edit `src/components/sections/SkillsSection.vue` to update skills and technologies

6. **Portfolio**: Edit `src/components/sections/PortfolioSection.vue` to update projects

7. **Contact**: Edit `src/components/sections/ContactSection.vue` to update contact information

### Change Colors and Theme

Edit `src/plugins/vuetify.js` to customize the color scheme and theme.

### Add Images

Replace placeholder images with your own:
- Profile images: Update image URLs in `AboutSection.vue` and `SidebarMenu.vue`
- Portfolio images: Update image URLs in `PortfolioSection.vue`

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── AboutSection.vue
│   │   │   ├── ExperienceSection.vue
│   │   │   ├── EducationSection.vue
│   │   │   ├── SkillsSection.vue
│   │   │   ├── PortfolioSection.vue
│   │   │   └── ContactSection.vue
│   │   └── SidebarMenu.vue
│   ├── views/
│   │   └── Home.vue
│   ├── plugins/
│   │   └── vuetify.js
│   ├── router/
│   │   └── index.js
│   ├── styles/
│   │   └── main.css
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- Vue.js 3
- Vuetify 3
- Vue Router
- Vite
- Material Design Icons

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on the repository.

