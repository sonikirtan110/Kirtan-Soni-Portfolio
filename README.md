### Kirtan Soni Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, projects, and professional experience as a Data Analyst and AI/ML enthusiast. This portfolio features a clean design with interactive elements, animations, and a dark/light theme toggle.

## 📑 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Technologies Used](#%EF%B8%8F-technologies-used)
- [File Structure](#-file-structure)
- [Installation](#-installation)
- [Customization](#-customization)
- [Sections](#-sections)
- [Responsive Design](#-responsive-design)
- [Browser Compatibility](#-browser-compatibility)
- [Performance Optimization](#-performance-optimization)
- [Accessibility](#-accessibility)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)


## 🌟 Features

- **Responsive Design**: Fully responsive layout that adapts to all screen sizes from mobile to desktop
- **Theme Toggle**: Interactive dark/light mode toggle with localStorage persistence for user preferences
- **Modern UI Components**:

- Animated hero section with morphing profile image
- Interactive skill cards with progress bars
- Filterable project gallery
- Certificate showcase
- Contact form with validation
- Social media integration



- **Animations and Effects**:

- Smooth scroll behavior
- Fade-in animations on scroll
- Hover effects on interactive elements
- Typewriter text effect in hero section
- Morphing animations for profile image



- **Navigation**:

- Fixed navigation bar with scroll-aware behavior (hides on scroll down, shows on scroll up)
- Mobile-friendly hamburger menu
- Smooth scrolling to sections



- **Custom 404 Page**: Branded error page for better user experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Cross-Browser Compatible**: Tested on major browsers


## 🔍 Demo

Visit the live portfolio at: [https://kirtansoni.com](https://kirtansoni.com)

## 🛠️ Technologies Used

- **HTML5**

- Semantic markup structure
- Accessibility attributes
- SVG integration



- **CSS3**

- CSS Variables for theming
- Flexbox and Grid layouts
- Media queries for responsiveness
- Animations and transitions
- Pseudo-elements and pseudo-classes



- **JavaScript (Vanilla)**

- DOM manipulation
- Event handling
- Intersection Observer API
- Local Storage API
- Form validation



- **External Resources**

- Font Awesome (v6.4.0) for icons
- Google Fonts (Poppins & Montserrat)
- Custom SVG for X (Twitter) logo





## 📁 File Structure

```plaintext
portfolio-website/
├── index.html              # Main HTML file
├── error.html              # 404 error page
├── images/                 # Image assets directory
│   ├── Mydp.jpg            # Profile image
│   ├── powerbi.png         # Skill icons
│   ├── logo.png
│   ├── python.png
│   ├── sql.png
│   ├── brain.png
│   ├── tableau.webp
│   ├── pic4.png            # Project images
│   ├── overview.png
│   ├── cisco1.png          # Certificate images
│   ├── cisco2.png
│   ├── forage1.png
│   ├── forage2.png
│   ├── ibm.png
│   ├── chatgpt.png
│   └── MExcel.png
├── cv.pdf                  # Downloadable CV/resume
├── README.md               # Project documentation
└── LICENSE                 # License file
```

## 📥 Installation

1. **Clone the repository**:

```shellscript
git clone https://github.com/sonikirtan110/portfolio-website.git
```


2. **Navigate to the project directory**:

```shellscript
cd portfolio-website
```


3. **Open in browser**:

1. Double-click on `index.html` or
2. Use a local development server:

```shellscript
# Using Python
python -m http.server

# Using Node.js with http-server
npx http-server
```





4. **Deployment**:

1. The website can be deployed on any static hosting service like GitHub Pages, Vercel, Netlify, etc.
2. Simply upload all files maintaining the directory structure





## 🎨 Customization

### Personal Information

1. Open `index.html` in a text editor
2. Update the following sections:

1. Title and meta description tags
2. Hero section content (name, title, description)
3. About section details
4. Skills section with your expertise
5. Projects with your own work
6. Certificates with your achievements
7. Contact information and social media links





### Theme Colors

The website uses CSS variables for easy color customization:

1. Locate the `:root` CSS selector in the style section
2. Modify the color variables:

```css
:root {
  /* Light Theme Colors */
  --bg-primary-light: #f8f9fa;
  --bg-secondary-light: #ffffff;
  --text-primary-light: #212529;
  --text-secondary-light: #495057;
  
  /* Dark Theme Colors */
  --bg-primary-dark: #121212;
  --bg-secondary-dark: #1e1e1e;
  --text-primary-dark: #f8f9fa;
  --text-secondary-dark: #adb5bd;
  
  /* Accent Colors */
  --accent-color: #4361ee;
  --accent-hover: #3a56e4;
  --accent-light: #eef2ff;
  
  /* Gradient Colors */
  --gradient-1: linear-gradient(135deg, #4361ee, #3a56e4);
  /* Additional gradients... */
}
```




### Images

1. Replace the images in the `images/` directory with your own
2. Maintain the same filenames or update the references in the HTML
3. Recommended image sizes:

1. Profile image: 400x400px (1:1 ratio)
2. Project thumbnails: 800x450px (16:9 ratio)
3. Certificate images: 800x400px (2:1 ratio)





### Adding New Sections

To add a new section:

1. Follow the existing HTML structure pattern
2. Add a new section tag with appropriate ID
3. Update the navigation menu to include the new section
4. Style the section using the existing CSS patterns


## 📋 Sections

### 1. Navigation

- Fixed position navigation bar
- Responsive design with mobile hamburger menu
- Smooth scrolling to sections
- Theme toggle button
- Scroll-aware behavior (hides on scroll down, shows on scroll up)


### 2. Hero Section

- Animated profile image with morphing effect
- Typewriter text animation for job title
- Brief introduction and call-to-action buttons
- Social media links
- Background gradient elements


### 3. About Section

- Professional summary with key points
- Education background with details
- Clean, readable layout with hover effects


### 4. Skills Section

- Visual skill cards with icons
- Animated progress bars showing proficiency levels
- Hover effects with color-coded categories
- Responsive grid layout


### 5. Projects Section

- Filterable project gallery (All, Data Analysis, Machine Learning, Visualization)
- Project cards with images, descriptions, and tags
- Links to GitHub repositories and live demos
- Hover animations and transitions


### 6. Certificates Section

- Certificate cards with images and details
- Issuing organization and date information
- Hover effects and animations
- Responsive grid layout


### 7. Contact Section

- Icon-based contact options with tooltips
- Contact form with validation
- Social media links
- Clean, accessible design


### 8. Footer

- Site information and copyright
- Quick navigation links
- Contact information
- Social media links


### 9. 404 Error Page

- Custom branded error page
- Navigation back to main site
- Consistent styling with main site


## 📱 Responsive Design

The website is fully responsive with multiple breakpoints:

- **Extra Small Devices**: Up to 400px

- Simplified layouts
- Smaller font sizes
- Adjusted spacing



- **Small Devices (Mobile)**: 401px to 576px

- Single column layouts
- Mobile navigation menu
- Optimized hero section



- **Medium Devices (Tablets)**: 577px to 991px

- Adjusted grid layouts
- Optimized spacing
- Responsive typography



- **Large Devices (Desktops)**: 992px to 1200px

- Multi-column layouts
- Full navigation menu
- Optimized spacing



- **Extra Large Devices**: Above 1200px

- Maximum container width
- Optimized spacing for larger screens





## 🌐 Browser Compatibility

Tested and optimized for:

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Opera (latest)
- Mobile browsers (Chrome for Android, Safari for iOS)


## ⚡ Performance Optimization

- **Image Optimization**:

- Properly sized images
- Lazy loading for images below the fold
- Appropriate image formats



- **CSS Optimization**:

- Efficient selectors
- Reusable CSS variables
- Minimal redundancy



- **JavaScript Optimization**:

- Event delegation where appropriate
- Debounced scroll events
- Efficient DOM manipulation
- Intersection Observer for scroll animations



- **Loading Optimization**:

- Critical CSS inlined
- Preloading of key resources
- Deferred non-critical JavaScript





## ♿ Accessibility

- Semantic HTML structure
- ARIA attributes where necessary
- Sufficient color contrast
- Keyboard navigation support
- Screen reader friendly content
- Focus states for interactive elements
- Alternative text for images


## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. **Fork the repository**
2. **Create a feature branch**:

```shellscript
git checkout -b feature/your-feature-name
```


3. **Commit your changes**:

```shellscript
git commit -m 'Add some feature'
```


4. **Push to the branch**:

```shellscript
git push origin feature/your-feature-name
```


5. **Open a Pull Request**


Please ensure your code follows the existing style and includes appropriate documentation.

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**:

1. Check file paths and case sensitivity
2. Ensure image files exist in the correct directory



2. **Theme toggle not working**:

1. Clear browser cache and local storage
2. Check for JavaScript errors in the console



3. **Responsive issues**:

1. Test with different device widths
2. Check media query breakpoints



4. **Form submission errors**:

1. Ensure all required fields are completed
2. Check for validation errors





### Getting Help

If you encounter issues not covered here, please:

- Open an issue on GitHub
- Contact me directly through the portfolio contact form


## 🚀 Future Enhancements

Planned features for future updates:

- **Blog Section**: Integration of a blog for sharing insights and tutorials
- **Project Details Pages**: Dedicated pages for each project with more information
- **Testimonials Section**: Feedback from clients and colleagues
- **Multi-language Support**: Translations for international visitors
- **Advanced Animations**: More interactive elements and micro-interactions
- **Backend Integration**: Server-side processing for the contact form
- **Analytics Dashboard**: Private statistics on portfolio visits and interactions


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Font Awesome for the icon library
- Google Fonts for the typography
- Inspiration from various portfolio designs across the web
- The web development community for continuous learning resources


## 📞 Contact

- **Email**: [sonikirtan2004@gmail.com](mailto:sonikirtan2004@gmail.com)
- **LinkedIn**: [linkedin.com/in/kirtansoni02](https://linkedin.com/in/kirtansoni02)
- **GitHub**: [github.com/sonikirtan110](https://github.com/sonikirtan110)
- **X (Twitter)**: [@sonikirtan777](https://x.com/sonikirtan777)
- **Instagram**: [@kirtan__soni](https://www.instagram.com/kirtan__soni)


---

Thank you for checking out my portfolio website! I hope it serves as inspiration for your own projects.
