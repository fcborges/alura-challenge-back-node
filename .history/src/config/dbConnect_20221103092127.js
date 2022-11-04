import mongoose from "mongoose"

// mongoose.connect("mongodb+srv://alura:123@alura.dkjed.mongodb.net/alura-node");
mongoose.connect("mongodb+srv://fcborges:211217@fcborges.gdtb4af.mongodb.net/alura-challenge"); 

let db = mongoose.connection;

export default db;