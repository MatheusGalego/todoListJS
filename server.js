import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./src/routes/taskRoutes.js";

const app = express();

// Middleware para ler JSON e permitir requisições externas
app.use(express.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect("mongodb://localhost:27017/todo_js")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar no MongoDB:", err));

// Rota principal
app.get("/", (req, res) => {
  res.send("API rodando");
});

// Registro das rotas de tarefas
app.use("/tasks", taskRoutes);

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
