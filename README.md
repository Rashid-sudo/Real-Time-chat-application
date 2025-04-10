💬 Real-Time Chat App
A full-stack real-time chat application built using React, Node.js, Express, and Socket.io.

✨ Features
🔌 Real-time messaging with WebSockets (Socket.io)
💻 Built with React and Node.js
🔄 Bidirectional event-based communication
📦 Clean UI and responsive design
🌍 Easy to deploy (Render for backend, Vercel for frontend)

📁 Tech Stack
Frontend 	          Backend 	   Real-Time 	 Deployment
React 18	          Node.js 	   Socket.io	  Vercel
Socket.io-client	  Express.js    	          Render 

🚀 Getting Started
📦 Clone the Project
git clone https://github.com/your-username/chat-app.git
cd chat-app

🛠️ Backend Setup
cd backend
npm install
npm start
Backend runs on: http://localhost:5000

🎨 Frontend Setup
cd ../frontend
npm install
npm start
Frontend runs on: http://localhost:3000

🔄 How It Works
(1) User connects to frontend.
(2) React app connects to backend via Socket.io.
(3) Messages are sent in real-time and broadcast to all connected users.

 Deployment
🔧 Backend on Render
(1) Push backend code to GitHub.
(2) Go to Render → New Web Service.
(3) Set start command to node server.js and deploy.

🎯 Frontend on Vercel
(1) Push frontend code to GitHub.
(2) Go to Vercel → Import project.
(3) Follow steps and deploy.
