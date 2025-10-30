import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({ // Aqui cria o "Schema", para passar no modelo
    title: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    description: {
        type: String,
        maxlength: 500,
    },
    status: {
        type: String, 
        default: "pendente",
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    }
});

const Task = mongoose.model("Task", taskSchema); // Aqui cria o modelo

export default Task;