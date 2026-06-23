import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import patientRoutes from "./routes/patientRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 CREATE HTTP SERVER
const server = http.createServer(app);

// 🔥 CREATE SOCKET SERVER
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// 🔥 SOCKET CONNECTION
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

// 🔥 MAKE IO ACCESSIBLE IN CONTROLLERS
app.set("io", io);

app.use("/patients", patientRoutes);

// 🔥 START SERVER
server.listen(5000, () => {
  console.log("Server running on port 5000");
});