import mongoose from "mongoose";

const subTodoSchema = mongoose.Schema({
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
    }
},{timestamps: true})

const SubTodo = mongoose.model('SubTodo', subTodoSchema)

