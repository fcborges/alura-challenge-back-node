import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: true},
    descricao: {type: String},
    url: {type: String}
  },
  {
    versionKey: false
  }
)

const filmes = mongoose.model("filmes", filmeSchema)

export default filmes