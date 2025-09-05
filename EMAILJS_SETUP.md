# EmailJS Setup Guide

## Why emails aren't working
The contact form is currently set up to show success messages but isn't actually sending emails because EmailJS needs to be configured with your actual account details.

## How to fix email sending:

### Step 1: Create EmailJS Account
1. Go to [https://emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Connect your Gmail account (Ademegcollege@gmail.com)
5. Note down your **Service ID** (e.g., "service_abc123")

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Ademeg College website contact form.
```

4. Save the template and note down your **Template ID** (e.g., "template_xyz789")

### Step 4: Get Your User ID
1. Go to "Account" in your EmailJS dashboard
2. Copy your **User ID** (e.g., "user_abc123def456")

### Step 5: Update the Code
1. Open `script.js`
2. Find the line: `emailjs.init("user_public_key");`
3. Replace `"user_public_key"` with your actual User ID
4. Uncomment the email sending code (remove the `//` from lines 325-338)
5. Replace `"YOUR_SERVICE_ID"` with your Service ID
6. Replace `"YOUR_TEMPLATE_ID"` with your Template ID

### Step 6: Test
1. Save the files
2. Test the contact form
3. Check your Gmail inbox for the email

## Alternative: Use WhatsApp Instead
Since you have WhatsApp integration, users can also contact you directly via WhatsApp using the "Chat Now" button in the contact section.

## Need Help?
If you need help setting up EmailJS, you can:
1. Contact EmailJS support
2. Use the WhatsApp contact button as an alternative
3. Check the EmailJS documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
