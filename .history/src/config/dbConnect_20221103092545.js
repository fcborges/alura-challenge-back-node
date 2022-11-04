import mongoose from "mongoose"

// mongoose.connect("mongodb+srv://alura:123@alura.dkjed.mongodb.net/alura-node");
mongoose.connect("mongodb+srv://fcborges:231112@cluster0.gdtb4af.mongodb.net/?retryWrites=true&w=majority"); 

let db = mongoose.connection;

export default db;