import express from "express";
import Task from "../models/taskModel.js";

const router = express.Router(); // Cria um objeto de rotas. Definir endpoints

// O async/await é usada para esperar uma ação demora (como acessar o banco) acontecer e depois executar. Sem ela, iria rodar antes de acessar o banco.

// Listar tarefas
router.get("/", async (req, res) => { 
    const task = await Task.find();
    res.json(task);
});

// Criar nova tarefa
router.post("/", async(req,res) => {
    try {
        const task = new Task(req.body); // cria o objeto
        const savedTask = await task.save(); // salva no mongo
        res.status(201).json(savedTask); // devolve o 200
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// Listar por ID
router.get("/:id", async (req, res) => {
     try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({message: "Tarefa não encontrada"});
        res.json(task);
     } catch (error) {
        res.status(400).json({message: error.message});
     }
});

//Atualizar tarefa
router.put("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedTask) return res.status(404).json({message: "Tarefa não encontrada"});
        res.json(updatedTask);
    }catch (error){
        res.status(400).json({message: error.message});
    }
});

//Deletar tarefa
router.delete("/:id", async (req,res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask) return res.status(404).json({message: "Tarefa não encontrada"});
        res.json(deletedTask);
    } catch (error){
        res.status(400).json({message: error.message});
    }
});

export default router;