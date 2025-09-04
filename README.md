# Ademeg College Website

Official website for Ademeg College - Excellence in Education

## 🏫 About

Ademeg College is a premier educational institution located in Makoko Yaba, Lagos, Nigeria. We are committed to providing world-class education with modern facilities and experienced faculty.

**Address:** 10 Irepodun Street, Makoko Yaba, Lagos, Nigeria  
**Phone:** +234-803-123-4567  
**Email:** Ademegcollege@gmail.com

## 🚀 Features

- **Responsive Design** - Optimized for all devices
- **Modern UI/UX** - Clean and professional design
- **Image Slider** - Showcasing school facilities and activities
- **Contact Form** - Direct email integration
- **Certificate Pages** - CAC and SMEDAN certificates
- **SEO Optimized** - Enhanced search engine visibility
- **Fast Loading** - Optimized performance

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript ES6+** - Interactive functionality
- **EmailJS** - Contact form integration
- **Cloudinary** - Image hosting and optimization
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📁 Project Structure

```
ademeg-college/
├── index.html          # Main homepage
├── cac.html           # CAC certificate page
├── smedan.html        # SMEDAN certificate page
├── styles.css         # Main stylesheet
├── script.js          # JavaScript functionality
├── netlify.toml       # Netlify configuration
├── _redirects         # URL redirects
├── package.json       # Project metadata
└── README.md          # This file
```

## 🚀 Deployment on Netlify

### Method 1: Drag & Drop (Easiest)

1. Zip the entire project folder
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the zip file to the deploy area
4. Your site will be live in minutes!

### Method 2: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically deploy on every push

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir .
```

## ⚙️ Configuration

The project includes optimized configuration for Netlify:

- **`netlify.toml`** - Build settings, redirects, and headers
- **`_redirects`** - URL redirects for better navigation
- **Security headers** - Enhanced security
- **Cache optimization** - Better performance

## 📧 Contact Form Setup

The contact form uses EmailJS. To configure:

1. Sign up at [EmailJS](https://emailjs.com)
2. Create a service (Gmail, Outlook, etc.)
3. Update the EmailJS configuration in `script.js`:
   ```javascript
   emailjs.init("YOUR_USER_ID");
   ```

## 🖼️ Images

All images are hosted on Cloudinary for optimal performance:
- School logo and branding
- Facility photos
- Student activities
- Certificates

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🔍 SEO Features

- Meta tags and Open Graph
- Structured data (JSON-LD)
- Canonical URLs
- Social media optimization
- Fast loading times

## 🛡️ Security

- Content Security Policy headers
- XSS protection
- Frame options
- Referrer policy

## 📞 Support

For technical support or questions about the website, contact:
- **Email:** Ademegcollege@gmail.com
- **Phone:** +234-803-123-4567

## 📄 License

This project is licensed under the MIT License.

---

**Ademeg College** - Excellence in Education  
*Nurturing minds, building futures, and creating leaders*