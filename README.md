# 🌿 SG Fragrance House – Oriental Aromatics

A modern, responsive web application for showcasing premium fragrances and aroma products. Built with **Next.js 14**, **Tailwind CSS**, and enhanced with smooth animations and a fully functional contact system.

---

## 🚀 Features

* ✨ Elegant and modern UI design
* 📱 Fully responsive (mobile + desktop)
* 🎬 Smooth animations using Framer Motion
* 🧭 Sticky and dynamic Navbar
* 🛍️ Product showcase section
* 📩 Contact Us form with:

  * Form validation
  * Email sending (Nodemailer)
  * Success & error toast notifications
* 🎯 Clean component-based architecture

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Backend API:** Next.js API Routes
* **Email Service:** Nodemailer (Gmail SMTP)

---

## 📂 Project Structure

```
app/
  ├── api/contact/route.ts   # Backend API for contact form
  ├── contact/page.tsx       # Contact page
  ├── page.tsx               # Homepage

components/
  ├── Navbar.tsx
  ├── Footer.tsx
  ├── ContactForm.tsx
  ├── Hero.tsx

public/
  ├── images/
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```
git clone https://github.com/Trupti840/oriental-aromatics.git
cd oriental-aromatics
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

Open 👉 http://localhost:3000

---

## 🔐 Environment Variables

Create a `.env.local` file in root:

```
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=yourgmail@gmail.com
```

> ⚠️ Use **Google App Password**, not your actual Gmail password.

---

## 📩 Contact Form Functionality

* Validates user inputs (email, required fields)
* Sends email using Nodemailer
* Displays success/error toast messages
* Smooth animations for better UX

---

## 🎨 UI Highlights

* Gradient backgrounds
* Floating input labels
* Hover animations
* Card-based layout
* Luxury theme design

---

## 🚀 Deployment

Easily deploy using **Vercel**:

1. Push code to GitHub
2. Import repo in Vercel
3. Add environment variables
4. Deploy

---

## 📌 Future Improvements

* 📊 Store leads in database (MongoDB / PostgreSQL)
* 📱 WhatsApp integration for instant notifications
* 🔐 Admin dashboard for managing leads
* 🌍 SEO optimization

---

## 👩‍💻 Author

**Trupti Pawar**
GitHub: https://github.com/Trupti840

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
