# 💬 Group Chat App – Frontend & Socket Server

This repository contains both the **React-based frontend** and the **Node.js-powered socket server** for a scalable, real-time group chat application. 
The architecture is designed to deliver instant messaging across users in a group, while ensuring reliable persistence and connectivity management using **Redis**, **Kafka**, and a dedicated backend service.

---

## 📁 Project Structure
├── frontend-service/         # React UI for chat interface 
├── socket-server-chat/    # Node.js WebSocket server

---

## ⚙️ Technologies Used

- **React** – Frontend framework for building dynamic user interfaces
- **Node.js** – Backend runtime for the socket server
- **Socket.IO** – Real-time bidirectional communication between client and server
- **Redis** – Temporary store for managing group connectivity and socket state
- **Kafka** – Message broker for reliable delivery and persistence

---

## 🔌 Socket Server Responsibilities

The socket server acts as the real-time communication hub between the frontend and backend services. It handles:

- 📡 **Real-Time Messaging**: Broadcasts messages to all connected users in a group
- 🧠 **Redis Integration**: Tracks active users and group memberships for efficient delivery
- 📤 **Kafka Integration**: Publishes messages to Kafka topics for backend persistence
- 🔄 **Event Routing**: Listens to frontend events and routes them to appropriate services

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/group-chat-app.git
cd group-chat-app

cd frontend
npm install

cd ../socket-server
npm install

📚 Future Enhancements
- ✅ Authentication integration
- ✅ Group creation and management UI

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

