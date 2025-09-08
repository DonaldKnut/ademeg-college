#!/bin/bash

# Ademeg College Website Deployment Script
echo "🚀 Preparing Ademeg College website for deployment..."

# Check if all required files exist
echo "📁 Checking required files..."
required_files=("index.html" "styles.css" "script.js" "cac.html" "smedan.html" "netlify.toml" "_redirects" "package.json")

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file found"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

# Create deployment package
echo "📦 Creating deployment package..."
zip -r ademeg-college-website.zip . -x "*.git*" "*.DS_Store*" "deploy.sh" "README.md"

echo "✅ Deployment package created: ademeg-college-website.zip"
echo ""
echo "🌐 Ready for Netlify deployment!"
echo "1. Go to https://netlify.com"
echo "2. Drag and drop 'ademeg-college-website.zip'"
echo "3. Your site will be live in minutes!"
echo ""
echo "📧 Don't forget to configure EmailJS for the contact form:"
echo "   - Sign up at https://emailjs.com"
echo "   - Update the EmailJS configuration in script.js"
