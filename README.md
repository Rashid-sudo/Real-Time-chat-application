# 💬 Real-Time Chat Application

A fully functional real-time chat application developed using **React** for the frontend and **Node.js** with **Socket.io** for the backend. This app showcases real-time communication with a simple, elegant user interface.

---

## 🌟 Features

- ⚡ Real-time messaging with WebSockets
- 🔧 Backend powered by Node.js and Express
- 🎨 Frontend built with React 18
- 🔌 Uses Socket.io for seamless bi-directional communication
- 💻 Clean and responsive UI
- 🌐 Easy to deploy on Render (backend) and Vercel (frontend)

---

## 🛠 Tech Stack

| Category      | Technology            |
|---------------|------------------------|
| Frontend      | React, Socket.io-client |
| Backend       | Node.js, Express, Socket.io |
| Styling       | Inline styles (basic setup) |
| Deployment    | Vercel (Frontend), Render (Backend) |

---

## 🚀 Getting Started

### 1️⃣ Clone the Project

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2️⃣ Backend Setup

- cd backend
- npm install
- npm start
- The backend will start on: http://localhost:5000

### 3️⃣ Frontend Setup

- cd ../frontend
- npm install
- npm start
- The frontend will start on: http://localhost:3000

 ### 🔄 How It Works

- The frontend React app connects to the backend server via Socket.io.
- When a user sends a message, it's emitted through a socket event.
- The backend receives it and broadcasts it to all connected clients.
- Each client receives the message in real time and displays it.

### 📤 Deployment Guide
### 📌 Backend (Render)
- (1) Push backend folder to GitHub.
- (2) Go to Render and create a new Web Service.
- (3) Set:
- Build Command: npm install
- Start Command: node server.js
- Port: 5000

### 📌 Frontend (Vercel)
- (1) Push frontend folder to GitHub.
- (2) Go to Vercel, import the repository.
- (3) Configure:
- Framework Preset: React
- Build Command: npm run build
- Output Directory: build
