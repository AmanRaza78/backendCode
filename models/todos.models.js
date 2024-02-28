import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    content:{
        type: String,
        required: String
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    isCompleted:{
        type: Boolean
    },
    subTodos:[
        {
            type: mongoose.Types.ObjectId,
            ref: "SubTodo"

        }
    ]
},{timestamps: true})

const Todo = mongoose.model('Todo', todoSchema)

