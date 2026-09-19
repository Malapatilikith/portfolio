# Malapati Likith - AI & Data Science Portfolio Website

A modern, high-performance portfolio website for **Malapati Likith**, highlighting machine learning projects, deep learning architectures, certifications, education, and technical skills.

---

## 🌟 Highlights & Features

- **Cyber & AI Aesthetic**: Sleek glassmorphism cards, glowing ambient orbs, and neon accents.
- **Dark / Light Mode**: Smooth theme toggling with automatic persistence.
- **Dynamic Role Typewriter**: Interactive role animations in the hero header.
- **Profile Photo Customizer**:
  - **In-Browser Upload**: Click the camera icon or badge on the avatar to choose any photo from your computer with live preview & instant browser save.
  - **Direct File**: Or simply place your photo as `assets/profile.jpg` in this directory.
- **Comprehensive Resume Showcase**:
  - **3 Featured Projects**:
    1. *Stock Price Prediction with ML* (with live link: `https://stock-price-prediction-p57c.onrender.com`)
    2. *Breast Cancer Detection using MobileNetV2* (24,000+ images)
    3. *Face Detection for Marking Attendance using OpenCV*
  - **Technical Skills Matrix**: Filterable categories (Programming, ML & AI, Frameworks, Web & Backend, Databases, Tools).
  - **Certifications**: AWS Certified AI Practitioner, Advanced Automation, GitHub Foundations.
  - **Education**: B.Tech in AI & Data Science (GPA: 8.54/10.0), Class 12 (888/1000).
  - **Contact Card**: One-click copy for email (`likithmalapati@gmail.com`) and phone (`+91 944-164-9333`), plus prefilled contact form.

---

## 🚀 Running Locally (Live Preview)

To start the local web server:

```bash
# In the project directory (/Users/likith/Desktop/protfolio)
python3 -m http.server 3000
```

Then open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 How to Take Your Website Live (Free Hosting)

### Option 1: GitHub Pages (Recommended)
Since you already have GitHub profile [`Malapatilikith`](https://github.com/Malapatilikith):

1. Create a new public repository named `portfolio` on [GitHub](https://github.com/new).
2. In your terminal, run:
   ```bash
   cd /Users/likith/Desktop/protfolio
   git init
   git add .
   git commit -m "feat: launch portfolio website"
   git branch -M main
   git remote add origin https://github.com/Malapatilikith/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` / folder: `/ (root)`, and click **Save**.
4. Your website will be live worldwide at:  
   👉 **`https://malapatilikith.github.io/portfolio/`**

---

### Option 2: Render (Static Site)
Since you already have Render configured for your Stock Prediction app:
1. Log in to [dashboard.render.com](https://dashboard.render.com).
2. Click **New +** > **Static Site**.
3. Connect your `portfolio` GitHub repository.
4. Settings:
   - **Publish directory**: `./`
5. Click **Create Static Site**. Render will assign you a live `onrender.com` URL.

---

### Option 3: Vercel / Netlify
- Push to GitHub and import the repository into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant deployment and automatic HTTPS.

---

## 📂 Project Structure

```
protfolio/
├── index.html              # Main webpage with all resume sections
├── css/
│   └── style.css           # Styling, animations, dark/light themes
├── js/
│   └── main.js             # Typewriter, photo uploader, theme & interactive logic
├── assets/
│   ├── avatar-placeholder.svg  # High-tech default avatar
│   └── profile.jpg         # (Optional) Drop your photo here
├── .gitignore              # Git ignore rules
└── README.md               # Documentation & deployment guide
```
