# AI-Powered Job Match Dashboard

An AI-driven job recommendation platform built with **Next.js 15**, **React**, and **Tailwind CSS**, featuring job match scores based on user skills.

## 🚀 Features

✅ Fetches and displays job listings dynamically  
✅ Calculates **job match scores** based on user skills  
✅ Provides a **responsive UI** with Tailwind CSS  
✅ Displays **job details in a modal**  
✅ Handles **job applications with skill validation**

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS
- **State Management**: React useState
- **TypeScript** for better type safety

---

## 📂 Folder Structure

```
/job-match-dashboard
│── /src
│   ├── /app
│   │   ├── layout.tsx  # Main layout for the app
│   │   ├── page.tsx  # Homepage with JobList
│   ├── /components
│   │   ├── ApplyButton.tsx  # Handles job applications
│   │   ├── Job.tsx  # Displays individual job card
│   │   ├── JobDetails.tsx  # Displays job details in a modal
│   │   ├── JobList.tsx  # Lists job recommendations
│   │   ├── LoadingIndicator.tsx  # Displays a loading indicator
│   │   ├── MatchScore.tsx  # Visualizes job match score
│   ├── /data
│   │   ├── jobs.json  # Mock job data for local testing
│   ├── /styles
│   │   ├── globals.css  # Tailwind global styles
│   ├── /lib
│   │   ├── utils.ts  # Helper functions
│   │   ├── types.ts  # Type definitions for TypeScript
│── next.config.js
│── package.json
│── tailwind.config.js
│── tsconfig.json
│── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/greatochuko/job-match-dashboard.git
cd job-match-dashboard
```

### 2️⃣ Install dependencies

```sh
npm install
# or
yarn install
```

### 3️⃣ Run the development server

```sh
npm run dev
# or
yarn dev
```

The app will be available at **`http://localhost:3000`** 🚀.

---

## 📌 Key Components

### 🔹 **`JobList.tsx`**

Fetches job listings and displays them.

### 🔹 **`JobDetails.tsx`**

Shows job details in a modal.

### 🔹 **`MatchScore.tsx`**

Calculates and displays match scores dynamically.

### 🔹 **`ApplyButton.tsx`**

Validates if the user has the required skills before applying.

---

### **🌎 Deployment**

To deploy the project on **Vercel**, follow these steps:

1️⃣ **Push Your Code to GitHub**  
Ensure your code is committed and pushed to a GitHub repository.

```sh
git add .
git commit -m "Initial commit"
git push origin main
```

2️⃣ **Create a New Deployment on Vercel**

- Go to [Vercel](https://vercel.com/) and log in.
- Click **"New Project"** and import your GitHub repository.
- Configure the build settings (**Next.js is auto-detected**).
- Click **"Deploy"** and wait for the process to complete.

3️⃣ **Get Your Live URL**  
Once deployed, Vercel will provide a live link (e.g., `https://your-app.vercel.app`).

---

## 🤝 Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📞 Contact

For any questions, reach out:  
📧 Email: [greatochuko123@gmail.com](mailto:greatochuko123@gmail.com)  
🔗 LinkedIn: [linkedin.com/in/greatochuko](https://linkedin.com/in/greatochuko)

---

### 🚀 Happy Coding! 🎉
