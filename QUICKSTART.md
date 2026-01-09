# Quick Start Guide

## Installation Steps

1. **Navigate to the portfolio directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will automatically open at `http://localhost:3000`

## Customization Checklist

### 1. Personal Information
- [ ] Update name and title in `src/components/SidebarMenu.vue`
- [ ] Add your profile picture (replace placeholder image)
- [ ] Update social media links in `src/components/SidebarMenu.vue`

### 2. About Section
- [ ] Update personal description in `src/components/sections/AboutSection.vue`
- [ ] Replace profile image
- [ ] Update statistics (projects, clients, etc.)

### 3. Experience
- [ ] Edit work experience in `src/components/sections/ExperienceSection.vue`
- [ ] Add/remove experience entries
- [ ] Update technologies used

### 4. Education
- [ ] Update education details in `src/components/sections/EducationSection.vue`
- [ ] Add certifications
- [ ] Update dates and GPA

### 5. Skills
- [ ] Modify skills in `src/components/sections/SkillsSection.vue`
- [ ] Adjust skill levels (percentages)
- [ ] Add/remove technologies

### 6. Portfolio
- [ ] Add your projects in `src/components/sections/PortfolioSection.vue`
- [ ] Replace placeholder images with project screenshots
- [ ] Update project descriptions and links
- [ ] Add GitHub and demo links

### 7. Contact
- [ ] Update contact information in `src/components/sections/ContactSection.vue`
- [ ] Configure contact form (backend integration if needed)
- [ ] Update email, phone, and location

### 8. Colors & Theme
- [ ] Customize colors in `src/plugins/vuetify.js`
- [ ] Adjust theme colors to match your brand
- [ ] Modify gradient colors in CSS

## Adding Images

1. Create an `assets` folder in `src/`:
   ```
   src/assets/images/
   ```

2. Add your images to this folder

3. Update image paths in components:
   ```vue
   // Instead of:
   src="https://via.placeholder.com/150"
   
   // Use:
   src="/src/assets/images/profile.jpg"
   // or
   import profileImage from '@/assets/images/profile.jpg'
   ```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder. You can deploy this folder to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## Troubleshooting

### Port already in use
If port 3000 is already in use, Vite will automatically use the next available port.

### Icons not showing
Make sure `@mdi/font` is installed:
```bash
npm install @mdi/font
```

### Styles not loading
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Need Help?

- Check the main [README.md](./README.md) for more details
- Visit [Vuetify Documentation](https://vuetifyjs.com/)
- Visit [Vue.js Documentation](https://vuejs.org/)

